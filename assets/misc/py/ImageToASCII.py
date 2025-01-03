from ascii_magic import AsciiArt
def image_to_ascii_art():
    image = input("Image name : ")
    my_art = AsciiArt.from_image(image)
    my_art.to_terminal()
    #my_art._save_to_file(image+"ascii_art")


image_to_ascii_art()