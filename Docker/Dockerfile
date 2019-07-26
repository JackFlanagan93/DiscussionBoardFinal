FROM ubuntu
RUN apt update
RUN apt install git -y
RUN git clone https://github.com/JackFlanagan93/DiscussionBoardFinal.git
RUN apt install nodejs -y
RUN apt install npm -y
WORKDIR ./DiscussionBoardFinal/
RUN npm init
RUN npm install express --save
RUN npm install bcrypt --save
RUN npm install validator --save

run node server.js

