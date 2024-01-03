# jtermcvcs
CVCS JTerm course

This is the repository we'll use for our JTerm Class

In order to get this to work we have to do some things on your chromebook

Go to Terminal and then click Add SSH - add it then save

Click on the saved entry to SSH to the linux box

run command passwd and give yourself a new password

run the following commands
     - git clone https://github.com/posisme/jtermcvcs.git
     - cd jtermcvcs
     - git checkout student/yourname (but put in your first and last name)

run the following command
     - nano server.js

in that file edit the first line that says const PORT = XXX and change the XXX to a number between 3000 and 4000 then save

run the following command
     - nohup node server.js &

in your browser go to my ipaddress and the port you added


