alias updateplease='sudo apt update && sudo apt upgrade -y && sudo apt dist-upgrade -y && sudo apt autoremove -y && sudo snap refresh && flatpak update -y && flatpak uninstall --unused --delete-data -y && cinnamon-spice-updater --update-all'

alias use-intel="sudo prime-select intel && sudo reboot"
alias use-nvidia="sudo prime-select nvidia && sudo reboot"

alias loopback-microphone="arecord -f cd - | aplay -"

alias tlp-mode="sudo tlp-stat -s"
alias tlp-bat="sudo tlp bat"
alias tlp-ac="sudo tlp ac"
alias tlp-auto="sudo tlp start"
