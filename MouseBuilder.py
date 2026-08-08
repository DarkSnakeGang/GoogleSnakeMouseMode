import os
import urllib.request

BASE = os.path.dirname(os.path.abspath(__file__))

REMIX_URL = "https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeRemix/main/RemixMod.js"
REMIX_PATH = os.path.join(BASE, "RemixMod.js")
OUT_PATH = os.path.join(BASE, "MouseMod.js")
MOUSE_PATH = os.path.join(BASE, "modloadercode.js")


def main():
    print(f"Downloading {REMIX_URL}")
    urllib.request.urlretrieve(REMIX_URL, REMIX_PATH)

    with open(OUT_PATH, "w", encoding="utf-8") as out:
        for path in (REMIX_PATH, MOUSE_PATH):
            print(f"Appending {os.path.basename(path)}")
            with open(path, "r", encoding="utf-8") as f:
                out.write(f.read())
                out.write("\n")

    print(f"Wrote {OUT_PATH}")


if __name__ == "__main__":
    main()
