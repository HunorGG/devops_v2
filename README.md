 			██╗   ██╗ ██╗   ██╗███╗    ██╗ ██████╗  ██████╗

 			██║   ██║ ██║   ██║████╗   ██║██╔═══██╗██╔══██╗

 			███████║ ██║   ██║██╔██╗  ██║██║    ██║██████╔╝

 			██╔══██║ ██║   ██║██║╚██╗██║██║    ██║██╔══██╗

 			██║   ██║╚██████╔╝██║ ╚████║╚██████╔╝██║  ██║

 			╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝

 

 			██████╗ ███████╗██╗   ██╗  ██████╗  ██████╗  ███████╗

 			██╔══██╗██╔════╝██║   ██║ ██╔═══██╗██╔══██╗██╔════╝

 			██║   ██║█████╗   ██║   ██║██║     ██║██████╔╝███████╗

 			██║   ██║██╔══╝   ╚██╗ ██╔╝██║    ██║██╔═══╝ ╚════██║

 			██████╔╝███████╗  ╚████╔╝ ╚██████╔╝██║     ███████║

 			╚═════╝ ╚══════╝   ╚═══╝   ╚═════╝ ╚═╝     ╚══════╝

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

 

 	 DEVOPS beadandó – Hello World alkalmazás



Név:		Vörös Attila Hunor

Neptun-kód: 	H5HKDM





Függőségek:

 		node.js letöltése

 		git asztali verzió letöltése

 		docker desktop letöltése

 		DevContainer plugin betöltése a VisualStudioba



Amennyiben a függőségekkel megvagyunk és készen áll a környezet a program futtatására, a következőket szükséges elvégezni.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_



1\. Töltsd le a ***https://github.com/HunorGG/devops_v2*** repo-ból a fileokat .zip-ben és csomagold ki.



 	Visual Studiot nyisd meg és benne a kicsomagolás célmappáját.

 

 	Ha jól csináltad azt fogod bal oldalon látni amit a Github-ról töltöttél le és csomagoltál ki.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_



2\. Nyiss egy terminált a gyökérmappába és ezzel a kettő paranccsal futtatni is tudod localhoston az oldalt:



 		npm install

 		npm start



Ha viszont továbbmennél és konténeres környezetből szeretnéd futtatni akkor a következőket kell tenned:

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_



3\. Nyisd meg a Docker Desktop alkalmazást, máskülönben nem fog a parancs lefutni sikerrel.



 		docker build -t devops_app:v1 .   -> ez a parancs a dockerfile alapján buildeli az image-t.



 		Ha felépült az image, akkor a következő paranccsal futtatni is tudod a konténert.



 		docker run -p 8080:8080 devops_app:v1



 	Ha minden rendben lezajlott, akkor a http://localhost:8080 címen böngészőből el is éred az oldalt.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_



4\. A DevContainerhez nem kell más, csak a korábban már említett bővítményt injektálni a VisualStudioba



 	Ha idáig megvagyunk és megvan a bővítmény, akkor nincs más dolgunk csak

 

 	Ctrl + Shift + P -> Dev Containers: Reopen in Container



 	és elkezd legenerálódni és megnyílni a fejlesztői környezet konténer.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_



A projekt célja az volt, hogy egy egyszerű alkalmazáson keresztül bemutassam

a DevOps alaplépéseit:



 	kódkészítés

 	verziókezelés (trunk-based development)

 	buildelés

 	konténerizálás

 	DevContainer használata

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_



Futtatási összefoglaló:



Függőségek telepítése					npm install

App futtatása						npm start

Docker image build					docker build -t devops_app:v1 .

Docker konténer indítása				docker run -p 8080:8080 devops_app:v1

DevContainer indítása					Dev Containers: Reopen in Container

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_



 #    #  #  #                 #  #          #  #                             x                                                ###

 #   #   ####   ####  ######  ####  #    #  ####  #    #      ##      ######    ####  #   # ###### #      #    # ###### ##### ###

 #  #   #    # #          #  #    # ##   # #    # ##  ##     #  #     #      # #    #  # #  #      #      ##  ## #        #   ###

 ###    #    #  ####     #   #    # # #  # #    # # ## #    #    #    #####  # #        #   #####  #      # ## # #####    #    #

 #  #   #    #      #   #    #    # #  # # #    # #    #    ######    #      # #  ###   #   #      #      #    # #        #

 #   #  #    # #    #  #     #    # #   ## #    # #    #    #    #    #      # #    #   #   #      #      #    # #        #   ###

 #    #  ####   ####  ######  ####  #    #  ####  #    #    #    #    #      #  ####    #   ###### ###### #    # ######   #   ###

 

