import pywhatkit
import time
#from adminpass import whatsapp

# id del grupo de tests "FP7gEH0Urvq5iKLfup1I47"
# id del grupo de lesbianas "ES9uIxmkbBLHTJKzFCXtgc"

def msg_to_group(groupname,  msg):
    pywhatkit.sendwhatmsg_to_group_instantly(groupname , msg, tab_close=True, wait_time=15)
    print(f"Message sent to {groupname}")
    
def msg_to_person(phone, msg):
    pywhatkit.sendwhatmsg_instantly(phone, msg, tab_close=True, wait_time=15)
    print(f"Message sent to {phone}")

def send_image(receiver, image):
    pywhatkit.sendwhats_image(receiver, image, tab_close=True, wait_time=15)
    print(f"Image sent to {receiver}")



#Groups
FuerzaL = "ES9uIxmkbBLHTJKzFCXtgc"
test = "FP7gEH0Urvq5iKLfup1I47"
#Phones 
andrea = "+5218441769289"
Andrea= andrea
romi = "+528444537100"
Romi = romi
fer = "+528442445100"
Fer = fer
jesus = "+528445318868"
Jesus = jesus

imageYN = input("Do you want to send an Image? (y/n) ")
whichtype = input("Do you want to send a message to a group or to an specific person? (g/p) ")

if whichtype == "g" and imageYN == "n":
    whichgroup = input("Which group do you want to send a message to? ")
    if whichgroup == "FL":
        groupname = FuerzaL
    elif whichgroup == "test":
        groupname = test
    while True:
        msg_to_group(groupname, msg=input("Msg: "))
        time.sleep(5)
        if False:
            break

elif whichtype == "p" and imageYN == "n":
    whichperson = input("Which person do you want to send a message to: ")
    if whichperson == "Andrea" or whichperson == "andrea":
        phone = andrea
    elif whichperson == "Romi" or whichperson == "romi":
        phone = romi
    elif whichperson == "Fer" or whichperson == "fer":
        phone = fer
    elif whichperson == "Jesus" or whichperson == "jesus":
        phone = jesus
    else:
        print("Error: Unknown person")
    while True:
        msg_to_person(phone, msg=input("Msg: "))
        time.sleep(5)
        if False:
            break

elif whichtype == "g" and imageYN == "y":
    whichgroup = input("Which group do you want to send a message to? ")
    if whichgroup == "FL":
        receiver = FuerzaL
    elif whichgroup == "test":
        receiver = test
    while True:
        send_image(receiver, image="IMG_3660.jpg")
        time.sleep(5)
        if False:
            break

elif whichtype == "p" and imageYN == "y":
    whichperson = input("Which person do you want to send a message to: ")
    if whichperson == "Andrea" or whichperson == "andrea":
        receiver = andrea
    elif whichperson == "Romi" or whichperson == "romi":
        receiver = romi
    elif whichperson == "Fer" or whichperson == "fer":
        receiver = fer
    elif whichperson == "Jesus" or whichperson == "jesus":
        receiver = jesus
    else:
        print("Error: Unknown person")
    while True:
        send_image(receiver, image="IMG_3660.jpg")
        time.sleep(5)
        if False:
            break
else:
    whatsapp()
