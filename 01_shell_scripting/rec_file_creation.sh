mkdir -p files && cd files

for i in {1..10}
do
    echo "I am file $i" >> "file$i";
done