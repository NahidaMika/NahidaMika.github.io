import pyautogui
import time

def enter_adminpassword():
    adminpassword = "neosose09"
    time.sleep(10)
    pyautogui.typewrite(adminpassword)
    print("Already entered admin password")
    time.sleep(5)
    pyautogui.press("enter")

def wuwa_position():
    pyautogui.moveTo(1381, 11)
    time.sleep(5)
    pyautogui.rightClick()
    time.sleep(5)
    pyautogui.moveTo(1366, 54)
    time.sleep(5)
    pyautogui.rightClick()
    time.sleep(5)
    pyautogui.moveTo(1400, 94)
    time.sleep(5)
    pyautogui.click()
    time.sleep(5)
    pyautogui.moveTo(793, 708)
    pyautogui.click()
    time.sleep(5)
    enter_adminpassword()

def message():
    pyautogui.typewrite("Hello, world!")
    pyautogui.press("enter")


def whatsapp():
    print("Starting")
    pyautogui.moveTo(463,8)
    pyautogui.click()
    time.sleep(5)
    pyautogui.moveTo(265, 268)
    pyautogui.click()
    time.sleep(5)
    pyautogui.moveTo(699, 921)
    pyautogui.click()
    time.sleep(5)
    pyautogui.typewrite("Hello, world!")
    time.sleep(5)
    pyautogui.press("enter")
    print("Ending")
    while True:
        message()


    

    


def get_cursor():
    time.sleep(10)
    x, y = pyautogui.position()
    print(f"Cursor position: ({x}, {y})")
    time.sleep(5)
 
def cat_click():
    pyautogui.moveTo(942, 493)
    time.sleep(5)
    while True:
        pyautogui.click()
    
cat_click()
    




