# jtermcvcs
CVCS JTerm course

This is the repository we'll use for our JTerm Class

In order to get this to work we have to do some things on your chromebook

1. go to your Chromebook Settings -> Advanced -> Developers and turn on Linux
2. go to the terminal and you'll see a prompt for penguin
3. run the following commands
     - sudo apt-get update
     - sudo apt-get install nodejs
     - sudo apt-get install git
4. In your Chromebook Files app go to the 3 dots and to Manage Linux sharing
5. In your Chromebook Files app make sure you see Linux files
6. In your Terminal run the following commands
     - git clone https://github.com/posisme/jtermcvcs.git
     - cd jtermcvcs
     - nohup node server.js &
7. In your Chromebook settings search for Linux port forwarding. Add port 3000 TCP.

Now your server is running. In Chrome go to http://penguin.linux.test:3000 and you'll see something pop up.

If you go to your Wifi connection and hover over the i icon you can see you IP address

Anyone else on the school network can get to your site by going to http://IPADDRESS:3000 where IPADDRESS is your IP address.

