<h1 align="center">
ISSS - Studentska stranica
</h1>

<h3 align="center">Imamović Solutions</h3>
#### Software Development Agency

## Uputstvo za pokretanje

* Instalirati Eclipse Neon.3
    *   Instalirati Spring IDE -> Help->Eclipse Marketplace
    *   Po potrebi instalirati maven i spring boot cli https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started-installing-spring-boot.html
    
*   Instalirati MySql (Korištena verzija 5.7.14, druge verzije bi trebale biti kompatibilne)

*   Kreirati bazu podataka pod nazivom "tim6" (collation: utf8_slovenian_ci)

*   U ovu bazu podataka importovati i izvršiti skriptu /Implementacija/Database/tim6.sql
    * kreirati novog korisnika (username: EtfSI2016, hostname: localhost, password: 2016SIEtf) i dodati mu sve  privilegije na ovu bazu podataka
    
* Instalirati node.js

* Pomoću terminala navigirati u direktorij /Implementacija/app, te unijeti komandu "npm install"

* U Eclipse-u pokrenuti backend projekat kao "Spring Boot App"

* Nakon pokretanja backend aplikacije, u terminalu, u direktoriju /Implementacija/app, pokrenuti frontend aplikaciju sa komandom "npm start". Aplikacija će, pod uslovom da je odgovarajući port slobodan, biti pokrenuta na http://localhost:3000.

## Wiki

### Urađeno

* Backend servisi:
	* /obavjestenja/find?student_id=*
	
    	Vraća sva obavještenja relevantna za datog studenta
        
    * /pohadjanje/find?id=*
	
    	Vraća niz semestara sa informacijama o odgovarajućim predmetima
        
    * /student/get?id=*
	
    	Vraća podatke o studentu
        
    * /ispit/find/prijavljeni?student_id=*
	
    	Vraća sve prijavljene termine ispita

    * /ispit/find/neprijavljeni?student_id=*
	
    	Vraća sve objavljene termine ispita na koje student nije prijavljen, a čiji predmet pohađa

* Frontend:
	* login stranica
	* pregled obavještenja
	* pregled termina ispita
	* pregled studentskog profila
	* povezanost sa dovršenim backend servisima
	* responzivnost
	* validacija formi (treba dodatno testirati)
        
### TODO

* Backend:
	* Servis koji omogućava prijavu i odjavu termina ispita
	* Promjena ličnih podataka
	* Validacija podataka
	* Implementirati i kapacitet, odnosno popunjenost, termina ispita 

* Frontend:
	* Popraviti bug na login stranici (kada je visina stranice manja od slike)
	* Povezati sa nedovršenim backend servisima
	* Parsirati timestamp kao datum i vrijeme ispita u komponenti Ispiti.js

* Autentikacija korisnika