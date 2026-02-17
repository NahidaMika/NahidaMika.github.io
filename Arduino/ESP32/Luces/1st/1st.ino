#include <WiFi.h>
#include <WiFiMulti.h> // Added for multiple networks
#include "time.h"
#include "esp_sntp.h"
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include "DHT.h"

WiFiMulti wifiMulti; // Create instance

// OLED Config
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 32
#define OLED_RESET    -1
#define SCREEN_ADDRESS 0x3C 
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

// led strip 
#define LEDLIGHTS 23

// DHT sensor config
#define DHTPIN 19
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

// NTP Config
const char* ntpServer1 = "1.mx.pool.ntp.org";
const char* ntpServer2 = "pool.ntp.org";
const char* time_zone = "CST6"; 

unsigned long lastDHTReadTime = 0;
const unsigned long dhtInterval = 2000; // 2 seconds

void update_sensor(){
  unsigned long currentMillis = millis();

  // Only run this block if 2 seconds have passed
  if (currentMillis - lastDHTReadTime >= dhtInterval) {
    lastDHTReadTime = currentMillis;

    float h = dht.readHumidity();
    float t = dht.readTemperature();

    if (isnan(h) || isnan(t)) {
      Serial.println(F("Failed to read from DHT sensor!"));
      return;
    }

    float hic = dht.computeHeatIndex(t, h, false);

    // Update the OLED area for sensors
    display.fillRect(80, 0, 48, 32, SSD1306_BLACK); // Clear the sensor side only
    display.setTextSize(1);
    
    display.setCursor(82, 0);
    display.print("H:"); display.print(h, 0); display.print("%");
    
    display.setCursor(82, 11);
    display.print("T:"); display.print(t, 0); display.print("C");
    
    display.setCursor(82, 22);
    display.print("I:"); display.print(hic, 0);
    
    display.display(); 
  }
}

void updateOLEDTime() {
  struct tm timeinfo;
  if (!getLocalTime(&timeinfo)) {
    display.clearDisplay();
    display.setTextSize(1);
    display.setCursor(0, 0);
    display.println("Sincronizando...");
    display.display();
    return;
  }

  char timeStringBuff[9];
  char dateStringBuff[11];
  strftime(timeStringBuff, sizeof(timeStringBuff), "%H:%M:%S", &timeinfo);
  strftime(dateStringBuff, sizeof(dateStringBuff), "%d/%m/%Y", &timeinfo);

  display.clearDisplay();
  
  // 1. Draw Date (Left side)
  display.setTextSize(1);
  display.setCursor(0, 0);
  display.print(dateStringBuff);

  // 2. Draw Current SSID (Right side)
  // WiFi.SSID() returns the name of the network currently in use
  display.setCursor(64, 0);
  display.print(WiFi.SSID()); 
  
  // 3. Draw Time (Large)
  display.setTextSize(2);
  display.setCursor(0, 16);
  display.print(timeStringBuff);

  

  
  int currentHour = timeinfo.tm_hour;
  display.setCursor(112, 16);
  
  // Turn ON if hour is 18 (6pm) or later
  if (currentHour >= 18) {
    digitalWrite(LEDLIGHTS, HIGH);
    display.print("O");
    Serial.print("Can Turn on");
  } else {
    digitalWrite(LEDLIGHTS, LOW);
    display.print("X");
    Serial.print("Can't Turn on");
  }

  display.display();
}



void timeavailable(struct timeval *t) {
  Serial.println("¡Hora actualizada desde NTP!");
}

void setup() {
  pinMode(LEDLIGHTS, OUTPUT);
  Serial.begin(115200);

  dht.begin();

  // Initialize OLED
  Wire.begin(21, 22);
  if(!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
    Serial.println(F("SSD1306 Fail"));
  } else {
    display.clearDisplay();
    display.setTextColor(SSD1306_WHITE);
    display.setTextSize(1);
    display.setCursor(0,0);
    display.println("Buscando WiFi...");
    display.display();
  }

  // 1. Add your networks here
  wifiMulti.addAP("IZZI-4E8A", "F8F5329B4E8A");
  wifiMulti.addAP("Nahida", "nahidaPi");
  wifiMulti.addAP("THIRD_WIFI_NAME", "PASSWORD_HERE");

  // 2. Try to connect to any of the added APs
  Serial.println("Conectando...");
  while (wifiMulti.run() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("\nWiFi Conectado a: " + WiFi.SSID());

  // 3. NTP Config
  sntp_set_time_sync_notification_cb(timeavailable);
  configTzTime(time_zone, ntpServer1, ntpServer2);
}

void loop() {
  // wifiMulti.run() maintains the connection and switches 
  // to the best saved network automatically
  if (wifiMulti.run() == WL_CONNECTED) {
    updateOLEDTime();
    update_sensor();
  } else {
    display.clearDisplay();
    display.setCursor(0,0);
    display.println("Reconectando...");
    display.display();
  }
  delay(1000); 
}

