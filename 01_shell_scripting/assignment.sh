# 1. creating a directory named home

mkdir -p home

# 2. changing the directory and then creating a file

cd home
content="Hi! This is just a sample text file created using a shell script."
echo "$content" >> sample.txt

# 3. printing the content of the file
cat sample.txt

# 4. print occurences of t in content of sample.txt
grep -c -i t sample.txt

# 5. change the owner's permission to allow all operations
chmod u+rwx sample.txt

# 6. append another text to sample.txt
TEXT="Hi! This is just another sample text added to the file."
echo "$TEXT" >> sample.txt
cat sample.txt

# 7. changing all sort of deny for all users
chmod -R a-rwx sample.txt
cat sample.txt

# 8. reverting permissions back
chmod u+rwx sample.txt

# 9. create sample2.txt with same content as sampl.txt
content=$(cat sample.txt)
echo "$content" >> sample2.txt
echo "\n"
cat sample2.txt

# 10. adding random lines to sample.txt
random=$(cat ../random.txt)
echo "$random" >> sample.txt

# 11. first 50 lines of sample.txt
head -n 50 sample.txt

# 12. last 50 lines of sample.txt
tail -n 50 sample.txt

#13.  creating 5 files
touch -f prog1.txt prog2.txt program.txt code.txt info.txt

# 14. files with "prog" in their names


: '
    15. difference between ls and lsof: 
    ls gives details about files and directories in pwd
    lsof provides pid, user, for the files used by different processes

    16. recurrent directories can be created using

        $ mkdir -p home/sample

    17. permanently set env variable
        $ vi ~/.profile
        add variables like this
            export name="value"
        save and exit
    
    18. Inorder to kill the process running on port lets say 4000 so, the command would be

        $ kill -9 $(lsof -i :4000 -t)

            where -9 is signal code for immediate hard termination
            alias command will return processid with port 4000
'