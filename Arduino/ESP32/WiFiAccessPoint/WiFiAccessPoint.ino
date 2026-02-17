#include <WiFi.h>
#include <NetworkClient.h>
#include <WiFiAP.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

// Configuración de la Pantalla OLED 0.91"
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 32
#define OLED_RESET    -1
#define SCREEN_ADDRESS 0x3C 

#ifndef LED_BUILTIN
#define LED_BUILTIN 2 
#endif

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

// Configuración de Red
const char *ssid = "Nahida32";
const char *password = "nahida_kami"; 

NetworkServer server(80);

// Variables para actualización sin bloqueo
unsigned long lastUpdate = 0;
const long interval = 2000; // Actualizar pantalla cada 2 segundos

void updateOLED() {
  display.clearDisplay();
  display.setTextColor(SSD1306_WHITE);
  display.setTextSize(1);

  // Línea 1: SSID y Contador de Clientes
  display.setCursor(0, 0);
  display.print("SSID: ");
  display.print(ssid);
  
  // Mostrar cantidad de dispositivos conectados
  display.setCursor(95, 0);
  display.print("[");
  display.print(WiFi.softAPgetStationNum()); 
  display.print("]");

  // Línea 2: Password
  display.setCursor(0, 12); 
  display.print("PSWD: ");
  display.print(password);

  // Línea 3: Dirección IP
  display.setCursor(0, 24);
  display.print("IP:   ");
  display.print(WiFi.softAPIP().toString());

  display.display();
}

void setup() {
  Serial.begin(115200);
  
  Wire.begin(21, 22); 
  if(!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
    Serial.println(F("Error: No se encontró el SSD1306"));
    for(;;); 
  }

  pinMode(LED_BUILTIN, OUTPUT);

  if (!WiFi.softAP(ssid, password)) {
    Serial.println("Error al crear el Soft AP.");
    while (1);
  }

  server.begin();
  updateOLED(); // Primera actualización
  Serial.println("Servidor iniciado.");
}

void loop() {
  // Actualizar la pantalla periódicamente para refrescar el conteo de clientes
  unsigned long currentMillis = millis();
  if (currentMillis - lastUpdate >= interval) {
    lastUpdate = currentMillis;
    updateOLED();
  }

  NetworkClient client = server.accept(); 

  if (client) {                     
    String currentLine = "";        
    while (client.connected()) {    
      if (client.available()) {     
        char c = client.read();     
        if (c == '\n') {            
          if (currentLine.length() == 0) {
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println();
            client.print("<h1>Nahida Control</h1>");
            client.print("Clientes conectados: ");
            client.print(WiFi.softAPgetStationNum()); // También en la web
            client.print("<br><br>LED: <a href=\"/H\">ON</a> | <a href=\"/L\">OFF</a>");
            break;
          } else {
            currentLine = "";
          }
        } else if (c != '\r') {
          currentLine += c;
        }

        if (currentLine.endsWith("GET /H")) digitalWrite(LED_BUILTIN, HIGH);
        if (currentLine.endsWith("GET /L")) digitalWrite(LED_BUILTIN, LOW);
      }
    }
    client.stop();
  }
}
