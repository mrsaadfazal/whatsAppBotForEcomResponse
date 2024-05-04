sudo apt update -y
sudo apt install -y nodejs
node -v
sudo apt install -y npm

sudo apt install -y curl 
curl -s https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 

source ~/.bashrc   
nvm install node 
nvm install 18
nvm ls
nvm use 18
sudo npm install pm2 -g

wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb 
sudo dpkg -i google-chrome-stable_current_amd64.deb 
sudo apt-get install -f -y

sudo apt install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget