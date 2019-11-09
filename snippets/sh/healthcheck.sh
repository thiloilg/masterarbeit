for ((;;));
do
    curl -s $API_TEST_TARGET > /dev/null && break;
    sleep 1;
done
