mkdir diff
cd diff

content1="I am the content of the file a"
content2="I am the content of the file b"

echo "$content1" >> a.txt
echo "$content2" >> b.txt

vim -d a.txt  b.txt