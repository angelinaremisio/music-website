import os

#open text files to see which albums have already been added to the website
album_names = []
f = open("album_names.txt", "r", encoding = "UTF-8")
for line in f:
    album_names.append(line.strip("\n"))
f.close()

path = "C:/Users/angel/Desktop/Music Website/MusicHosting/Albums"
dir_list = os.listdir(path)

albums_to_add = []
for album in dir_list:
    if album not in album_names:
        albums_to_add.append(album)

#if no new albums
if not albums_to_add:
    print("No new albums to add.")
    open_file = False
#if new albums
else:
    print("New albums to add.")
    print("New albums:")
    for new_album in albums_to_add:
        print(new_album)
    open_file = True

#if new albums -> rewrite whole index file
if open_file:
    f = open("index.html", "r", encoding = "UTF-8")
    old_html = f.readlines()
    f.close()

    for new_album in albums_to_add:
        new_html = f'\n<div id="{new_album}">\n\n'

        new_path = path + "/" + new_album
        song_list = os.listdir(new_path)
        num_of_tracks = 1

        for song in song_list:
            new_html += f"<p>{song.strip(".mp3")}</p>\n"
            new_html += "<audio controls>\n"
            new_html += f'<source src="Albums/{new_album}/{song}" type="audio/mpeg">\n'
            new_html += "</audio>\n<br>\n\n"
            num_of_tracks += 1
        new_html += "</div>\n"

        part_of_button = f"show_songs('{new_album}')"
        part_of_button = str(part_of_button)
        button = '<button type="button" class="album" onclick ="'+part_of_button+f'">{new_album}</button>\n'

        #insert button right after other album buttons
        button_index = old_html.index("<!-- end of album buttons -->\n") - 1
        # insert div tag right above the body tag at the end of the html document
        div_index = old_html.index("</body>\n") + 1

        old_html.insert(button_index, button)
        old_html.insert(div_index, new_html)
        print(f"{new_album} added.")

    #when all new albums have been added, overwrite old html file
    f = open("index.html", "w", encoding = "UTF-8")
    f.writelines(old_html)
    f.close()

    f = open("album_names.txt", "a", encoding = "UTF-8")
    for new_album in albums_to_add:
        f.write("\n"+new_album)
    f.close()

#end of code