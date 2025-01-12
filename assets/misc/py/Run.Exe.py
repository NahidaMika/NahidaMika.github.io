import os
# os.startfile("D:\Juegos\MelonDS\melonDS.exe")
import time
import subprocess
import pyautogui
import pyuac
import sys
import ctypes


availableexe = "MelonDS.exe, Wuthering Waves.exe, Yuzu.exe, Ryujinx.exe, HYP.exe, Citra.exe, visualboyadvance.exe, steam.exe, epicgames.exe, osu!.exe, itch.exe"
print("These are the .exe that are available to open:")
print(availableexe)


while True:

    
   
    WhichExe = input("Which Exe do you want to open? ")

    x = 802
    y = 708

    if WhichExe == "MelonDS" or WhichExe == "melon" or WhichExe == "ds" or WhichExe == "DS" or WhichExe == "Melon":
        print("___________________________")
        print("Now initializing MelonDS")
        print("___________________________")

        MelonDS = subprocess.run(r"D:\Juegos\MelonDS\MelonDS.exe", shell=True, capture_output=True)

        print("Return code:", MelonDS.returncode)
        print("Standard output:", MelonDS.stdout.decode())
        print("Standard error:", MelonDS.stderr.decode())

    elif WhichExe == "itch":
        print("___________________________")
        print("Now initializing Itchio")
        print("___________________________")

        Itch = subprocess.run(r"D:\Juegos\MelonDS\MelonDS.exe", shell=True, capture_output=True)

        print("Return code:", Itch.returncode)
        print("Standard output:", Itch.stdout.decode())
        print("Standard error:", MelonDS.stderr.decode())

    elif WhichExe == "WuWa" or WhichExe == "wuwa" or WhichExe == "WUWA":
        #Execute VS as admin

        def is_admin():
            try:
                return ctypes.windll.shell32.IsUserAnAdmin()
            except:
                return False
 
        if is_admin():
            print("___________________________")
            print("Now initializing Wuthering Waves")
            print("___________________________")
            WuWa = subprocess.run(r"D:\Juegos\Wuthering Waves Game\Wuthering Waves.exe", shell=True, capture_output=True)
            print("Return code:", WuWa.returncode)
            print("Standard output:", WuWa.stdout.decode())
            print("Standard error:", WuWa.stderr.decode())   
        else:
            # Re-run the program with admin rights
            ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, " ".join(sys.argv), None, 1)
    
        

    elif WhichExe == "Yuzu" or WhichExe == "yuzu":
        print("___________________________")
        print("Now initializing Yuzu")
        print("___________________________")
    
        Yuzu = subprocess.run(r"C:\Users\tleyo\AppData\Local\yuzu\yuzu-windows-msvc\yuzu.exe", shell=True, capture_output=True)

        print("Return code:", Yuzu.returncode)
        print("Standard output:", Yuzu.stdout.decode())
        print("Standard error:", Yuzu.stderr.decode())

    elif WhichExe == "Ryujinx" or WhichExe == "ryujinx" or WhichExe == "Ryu" or WhichExe == "ryu":
        print("___________________________")
        print("Now initializing Ryujinx")
        print("___________________________")
    
        Ryujinx = subprocess.run(r"D:\Ryujinx\publish\Ryujinx.exe", shell=True, capture_output=True)

        print("Return code:", Ryujinx.returncode)
        print("Standard output:", Ryujinx.stdout.decode())
        print("Standard error:", Ryujinx.stderr.decode())

    elif WhichExe == "HYP" or WhichExe == "Genshin" or WhichExe == "genshin" or WhichExe == "hyp":
        #Execute VS as admin

        def is_admin():
            try:
                return ctypes.windll.shell32.IsUserAnAdmin()
            except:
                return False
 
        if is_admin():
            print("___________________________")
            print("Now initializing Hoyoverse launcher")
            print("___________________________")
            HYP = subprocess.run(r"C:\Program Files\HoYoPlay\launcher.exe", shell=True, capture_output=True)
            print("Return code:", HYP.returncode)
            print("Standard output:", HYP.stdout.decode())
            print("Standard error:", HYP.stderr.decode())
        
        else:
            # Re-run the program with admin rights
            ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, " ".join(sys.argv), None, 1)
    
        

    elif WhichExe == "Citra" or WhichExe == "citra":
        print("___________________________")
        print("Now initializing Citra")
        print("___________________________")
    
        Citra = subprocess.run(r"D:\Applicaciones\Citra\nightly\citra-qt.exe", shell=True, capture_output=True)

        print("Return code:", Citra.returncode)
        print("Standard output:", Citra.stdout.decode())
        print("Standard error:", Citra.stderr.decode())

    elif WhichExe == "GBA" or WhichExe == "gba":
        print("___________________________")
        print("Now initializing Game Boy Advance Emulator")
        print("___________________________")
    
        GBA = subprocess.run(r"D:\Applicaciones\GBAEmulator\visualboyadvance-m.exe", shell=True, capture_output=True)

        print("Return code:", GBA.returncode)
        print("Standard output:", GBA.stdout.decode())
        print("Standard error:", GBA.stderr.decode())

    elif WhichExe == "Steam" or WhichExe == "steam":
        
        def is_admin():
            try:
                return ctypes.windll.shell32.IsUserAnAdmin()
            except:
                return False
        
        if is_admin():
            print("___________________________")
            print("Now initializing Steam")
            print("___________________________")
            Steam = subprocess.run(r"C:\Program Files (x86)\Steam\Steam.exe", shell=True, capture_output=True) 
            print("Return code:", Steam.returncode)
            print("Standard output:", Steam.stdout.decode())
            print("Standard error:", Steam.stderr.decode())
        
        else:
            # Re-run the program with admin rights
            ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, " ".join(sys.argv), None, 1)

       

    elif WhichExe == "test":
        import adminpass
        WuWa = os.startfile(r"C:\Program Files (x86)\Steam\Steam.exe")
        adminpass.enter_adminpassword()

    elif WhichExe == "EpicGames" or WhichExe == "epicgames" or WhichExe == "epic":

        def is_admin():
            try:
                return ctypes.windll.shell32.IsUserAnAdmin()
            except:
                return False
        
        if is_admin():
            print("___________________________")
            print("Now initializing EpicGames")
            print("___________________________")
            EpicGames = subprocess.run(r"C:\Program Files (x86)\Epic Games\Launcher\Portal\Binaries\Win64\EpicGamesLauncher.exe", shell=True, capture_output=True)
            print("Return code:", EpicGames.returncode)
            print("Standard output:", EpicGames.stdout.decode())
            print("Standard error:", EpicGames.stderr.decode())
        
        else:
            # Re-run the program with admin rights
            ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, " ".join(sys.argv), None, 1)
            time.sleep(30)
            pyautogui.typewrite("EpicGames")
            time.sleep(5)
            pyautogui.press("enter")
    
    if WhichExe == "Osu" or WhichExe == "osu":
        
        print("___________________________")
        print("Now initializing Osu!")
        print("___________________________")

        Osu = subprocess.run(r"C:\Users\tleyo\AppData\Local\osu!\osu!.exe", shell=True, capture_output=True)

        print("Return code:", Osu.returncode)
        print("Standard output:", Osu.stdout.decode())
        print("Standard error:", Osu.stderr.decode())
    

    
    
    
    
    elif WhichExe == "exit" or WhichExe == "Exit" or WhichExe == "quit" or WhichExe == "Quit" or WhichExe == "q" or WhichExe == "Q" or WhichExe == "stop" or WhichExe == "Stop":
        break


