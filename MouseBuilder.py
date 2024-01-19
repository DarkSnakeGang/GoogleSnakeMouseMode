import urllib.request

url = "https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakePudding/main/PuddingMod.js"  # Replace with the actual URL of the file you want to download
destination_file = "PuddingMod.js"  # Replace with the desired local file name

urllib.request.urlretrieve(url, destination_file)

mouse_file = open("MouseMod.js", "w", encoding='utf-8')
mouse_init = open("modloadercode.js", "r", encoding='utf-8')
pudding = open("PuddingMod.js", "r", encoding='utf-8')

mouse_file.write(pudding.read())
mouse_file.write(mouse_init.read())
pudding.close()
mouse_init.close()
mouse_file.close()