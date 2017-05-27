<h1 align="center">
ISSS - Studentska stranica
</h1>


## Uputstvo za pokretanje

* Instalirati Eclipse Neon.3
    *   Instalirati Spring IDE -> Help->Eclipse Marketplace
    *   Po potrebi instalirati maven i spring boot cli https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started-installing-spring-boot.html
    
*   Instalirati MySql (Korištena verzija 5.7.14, druge verzije bi trebale biti kompatibilne)

*  Bazu podataka importovati izvršavanjem skripte /Implementacija/Database/tim6.sql
    * kreirati novog korisnika (username: EtfSI2016, hostname: localhost, password: 2016SIEtf) i dodati mu sve  privilegije na ovu bazu podataka
    
* Instalirati node.js

* Pomoću terminala navigirati u direktorij /Implementacija/app, te unijeti komandu "npm install"

* U Eclipse-u pokrenuti backend projekat kao "Spring Boot App"

* Nakon pokretanja backend aplikacije, u terminalu, u direktoriju /Implementacija/app, pokrenuti frontend aplikaciju sa komandom "npm start". Aplikacija će, pod uslovom da je odgovarajući port slobodan, biti pokrenuta na http://localhost:3000.

## Wiki

### Urađeno

* Baza podataka:
	* Napomena: Username i password za prijavu su jednaki.

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

* Autorizovani servisi po ulozi:

	* /prijava
	
	Login korisnika

	* /student/profile

	Vraća sve informacije o studentu

	* /student/buduci_predmeti

	Vraća buduće predmete

	* /student/update_password

	Ažurira šifru
	
	* /obavjestenja/pregled
	
	Vraća sva obavještenja

	* /pohadjanje/pregled

	Vraća predmete koje student sluša

	* /ispit/prijavljeni
	
	Vraća prijavljene ispite

	* /ispit/neprijavljeni

	Vraća neprijavljene ispite

	* /ispit/historija

	Vraća uspješno prijavljene ispite

	* /prijave/prijavi

	Prijava ispita

	* /prijave/odjava
	
	Odjava ispita

	

* Frontend:
	* login stranica
	* pregled obavještenja
	* pregled predmeta
	* pregled termina ispita
	* pregled studentskog profila
	* responzivnost
	* validacija formi 
	* parsiranje timestamp
	* prikazi grešaka
        

