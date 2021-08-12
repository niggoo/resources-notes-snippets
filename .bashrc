alias updateplease='sudo apt update && sudo apt upgrade -y && sudo apt dist-upgrade -y && sudo apt autoremove -y && sudo snap refresh && flatpak update -y && flatpak uninstall --unused --delete-data -y'
alias nvidia='test $(sudo prime-select query) = 'intel' && sudo prime-select nvidia && sudo reboot'
alias intel='test $(sudo prime-select query) = 'nvidia' && sudo prime-select intel && sudo reboot'
