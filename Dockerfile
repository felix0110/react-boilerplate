FROM centos:7

RUN sudo apt-get install -y nodejs
RUN sudo apt install -y npm

RUN sudo git clone --depth=1 https://github.com/felix0110/react-boilerplate.git web
RUN cd web
RUN sudo npm run setup


