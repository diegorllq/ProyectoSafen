const data = {
            ahuachapan: [
                { nombre: "GIMNASIO LOS PINITOS", dirc: "Ahuachapán Centro | Ave morazan", tel: "7736-9467", desc: "Refugio temporal de amplia capacidad.", imagen:"/SAFEN/img/Ahuachapán/cmunalataco.jpg"},
                { nombre: "CASA COMUNAL APANECA", dirc: "Ahuachapán Centro | Bo. El Centro", tel: "7380-4612", desc: "Resguardo para la comunidad de Apaneca.", imagen:"/SAFEN/img/Ahuachapán/comunaljujutla.jpg"},
                { nombre: "CASA COMUNAL ATACO", dirc: "Ahuachapán Centro | 3era calle Ote", tel: "7577-7205", desc: "Centro de resguardo en Ataco.", imagen:"/SAFEN/img/Ahuachapán/cmunalataco.jpg"},
                { nombre: "CASA COMUNAL GUAYMANGO", dirc: "Ahuachapán Sur | Barrio el centro", tel: "6985-9635", desc: "Ubicado frente al centro educativo.", imagen:"/SAFEN/img/Ahuachapán/comunalguaymango.jpg" },
                { nombre: "CASA COMUNAL EL MANGO", dirc: "Jujutla | Ahuachapán Sur", tel: "7889-8708", desc: "Refugio del distrito municipal.", imagen:"/SAFEN/img/Ahuachapán/comunalelmango.jpg" },
                { nombre: "NUEVO AMANECER", dirc: "San Francisco Menéndez | Ahuachapán Sur", tel: "7627-5788", desc: "Ubicado en la carretera litoral.", imagen:"/SAFEN/img/Ahuachapán/comunalnuevoamanecer.jpg" },
                { nombre: "CASA COMUNAL SAN PEDRO PUXTLA", dirc: "Ahuachapán Sur | Bo. San Pablo", tel: "7059-8000", desc: "Refugio frente a la alcaldía.", imagen:"/SAFEN/img/Ahuachapán/comunalsanpedropuxtla.jpg" },
                { nombre: "PREDIO DEL MERCADO", dirc: "Tacuba | Ahuachapán Centro", tel: "7886-6785", desc: "Predio municipal en Tacuba.", imagen:"/SAFEN/img/Ahuachapán/mercadotacuba.jpg"},
                { nombre: "CASA COMUNAL VALLE LA PUERTA", dirc: "Tacuba | Ahuachapán Centro", tel: "7672-5256", desc: "Refugio en zona rural de Tacuba.", imagen:"/SAFEN/img/Ahuachapán/comunalVallelapuerta.jpg" }
            ],
            cabanas: [
                { nombre: "LAS GOLONDRINAS ILOBASCO", dirc: "Lot. La Virgen Lote 13 Polígono C, Ilobasco, Cabañas Oeste", tel: "7592-2725", desc: "Ofrece alojamiento temporal y espacio seguro (Capacidad: 30 personas).", imagen:"/SAFEN/img/Cabañas/LasGolondrinasIlobasco.jpg" },
                { nombre: "POLIDEPORTIVO DE SENSUNTEPEQUE", dirc: "Barrio los remedios, col. Las brisas, Sensuntepeque", tel: "7478-4982", desc: "Áreas amplias para familias evacuadas (Capacidad: 30 personas).", imagen:"/SAFEN/img/Cabañas/PolidepVictoria.jpg.jpeg" },
                { nombre: "CASA COMUNAL VICTORIA", dirc: "Barrio el centro, distrito de Victoria, Cabañas Este", tel: "7478-4982", desc: "Protección y apoyo básico en situación de riesgo (Capacidad: 40 personas).", imagen:"/SAFEN/img/Cabañas/ComunalVictoria.jpg.jpeg" }
            ],
            chalatenango: [
                { nombre: "CASA COMUNAL CITALÁ", dirc: "Calle Manuel José Arce frente a Parque Municipal", tel: "7482-3336", desc: "Alojamiento temporal y protección (Capacidad: 40 personas).", imagen:"/SAFEN/img/Chalatenango/CasaComunalCitala.jpg.jpeg" },
                { nombre: "S.U.M. JARDINES DEL PARAÍSO", dirc: "Calle Principal Barrio San Luis, El Paraíso", tel: "7813-4492", desc: "Espacio seguro y resguardo temporal (Capacidad: 50 personas).",imagen:"/SAFEN/img/Chalatenango/SalonUsosMultipesJardinesDelParaiso.jpg.jpeg" },
                { nombre: "COMPLEJO CRISTIANO LA PALMA", dirc: "Barrio La Tejera, La Palma", tel: "6456-5226", desc: "Apoyo básico y alojamiento temporal (Capacidad: 40 personas).", imagen:"/SAFEN/img/Chalatenango/ComplejoCristianoLaPalma.jpg.jpeg" },
                { nombre: "CENTRO OBRERO DR. MARIO ZAMORA", dirc: "Caserio el refugio canton el gramal", tel: "7686-0344", desc: "Espacios amplios para atender familias (Capacidad: 70 personas).", imagen:"/SAFEN/img/Chalatenango/CentroObreroDoctorMarioZamora.jpg.jpeg"}
            ],
            cuscatlan: [
                { nombre: "ACOSAMA", dirc: "Calle principal de San Pedro Perulapán", tel: "7364-9543", desc: "Alojamiento temporal y espacios seguros (Capacidad: 90 personas).", imagen:"/SAFEN/img/Cuscatlán/Acosama.jpg.jpeg" },
                { nombre: "IGLESIA SAN RAFAEL ARCÁNGEL", dirc: "Avenida Manuel Rico, Barrio el Centro, Suchitoto", tel: "7628-6942", desc: "Protección y alojamiento temporal (Capacidad: 30 personas).", imagen:"/SAFEN/img/Cuscatlán/IglesiaSanRafaelArcangel.jpg.jpeg" },
                { nombre: "IGLESIA ASAMBLEA DE DIOS JEHOVÁ NISSI", dirc: "Colonia y Avenida Las Mercedes, Suchitoto", tel: "7628-6942", desc: "Apoyo comunitario y espacios seguros (Capacidad: 30 personas).", imagen:"/SAFEN/img/Cuscatlán/IglesiaAsambleaDeDiosJehovaNissi.jpg.jpeg" },
                { nombre: "S.U.M. ANEXO DISTRITO SAN RAMÓN", dirc: "Barrio el Centro, calle principal, San Ramón", tel: "7396-6483", desc: "Alojamiento y condiciones básicas (Capacidad: 30 personas).", imagen:"/SAFEN/img/Cuscatlán/SalonDeUsosMultiplesAnexoSanRamon.jpg.jpeg" },
                { nombre: "EL MERCADO ANEXO COMUNAL", dirc: "Barrio el centro, Santa Cruz Analquito", tel: "7693-5787", desc: "Resguardo temporal y apoyo básico (Capacidad: 32 personas).", imagen:"/SAFEN/img/Cuscatlán/MercaditoAnexoComunal.jpg.jpeg" },
                { nombre: "CENTRO DE CONVIVENCIA CIUDADANA", dirc: "Barrio Santa Lucia, Suchitoto", tel: "6007-0429", desc: "Instalaciones amplias y seguras (Capacidad: 68 personas).", imagen:"/SAFEN/img/Cuscatlán/CentroDeConvivenciaCuidadana.jpg.jpeg" }
            ],
            lalibertad: [
                { nombre: "S.U.M. WALTER THILO DEININGER", dirc: "Frente a parque de Antiguo Cuscatlán", tel: "7630-9796", desc: "Amplios espacios de resguardo (Capacidad: 150 personas).", imagen:"/SAFEN/img/La Libertad/SalonDeUsosMultiplesWalterThiloDeininger.jpg.jpeg"},
                { nombre: "CASA COMUNAL CHILTIUPÁN", dirc: "Barrio Santo Domingo, calle principal, Chiltiupán", tel: "7923-2829", desc: "Protección y apoyo básico (Capacidad: 60 personas).", imagen:"/SAFEN/img/La Libertad/CasaComunalChiltiupan.jpg.jpeg"},
                { nombre: "CASA COMUNAL EL ZONTE", dirc: "Cantón el Zonte, caserío Espíritu Santo", tel: "7704-9741", desc: "Alojamiento temporal y espacios seguros (Capacidad: 40 personas).", imagen:"/SAFEN/img/La Libertad/CasaComunalElZonte.jpg.jpeg" },
                { nombre: "S.U.M. DE COLÓN", dirc: "Parque Comunal de Colón", tel: "7853-6631", desc: "Resguardo y atención básica (Capacidad: 40 personas).", imagen:"/SAFEN/img/La Libertad/SalonDeUsosMultiplesColonEnParqueComunalDeColon.jpg.jpeg"},
                { nombre: "CASA COMUNAL LAS CONCHITAS", dirc: "Colonia las Conchitas, Colón", tel: "7853-6631", desc: "Alojamiento temporal y apoyo (Capacidad: 30 personas).", imagen:"/SAFEN/img/La Libertad/CasaComunalLasConchitas.jpg.jpeg" },
                { nombre: "CASA COMUNAL COMASAGUA", dirc: "Alcaldía de Comasagua", tel: "6017-0861", desc: "Protección y espacios seguros (Capacidad: 40 personas).", imagen:"/SAFEN/img/La Libertad/CasaComunalComasagua.jpg.jpeg" },
                { nombre: "CASA COMUNAL HUIZÚCAR", dirc: "Barrio el centro, Huizúcar", tel: "7229-5855", desc: "Resguardo temporal y atención básica (Capacidad: 50 personas).", imagen:"/SAFEN/img/La Libertad/CasaComunalHuizucar.jpg.jpeg" },
                { nombre: "IGLESIA EL CALVARIO HUIZÚCAR", dirc: "Calle principal, barrio el calvario", tel: "7794-228", desc: "Alojamiento temporal y apoyo básico (Capacidad: 70 personas).", imagen:"/SAFEN/img/La Libertad/IglesiaElCalvarioHuizucar.jpg.jpeg" },
                { nombre: "CENTRO OBRERO DR. HUMBERTO ROMERO", dirc: "Playa Conchalío km 37, La Libertad", tel: "7860-2001", desc: "Alojamiento temporal y apoyo comunitario (Capacidad: 100 personas).", imagen:"/SAFEN/img/La Libertad/CentroObrroDrHumbertoRomero.jpg.jpeg" },
                { nombre: "CENTRO ESCOLAR SAN ARTURO", dirc: "Cantón Cangrejera km 45.5, Puerto de la Libertad", tel: "6929-5516", desc: "Resguardo temporal y áreas seguras (Capacidad: 134 personas).", imagen:"/SAFEN/img/La Libertad/CentroEscolarSanArturo.jpg.jpeg" }
            ],
            lapaz: [
                { nombre: "IGLESIA ESPERANZA VIVA", dirc: "Barrio el centro, Santiago Nonualco", tel: "6135-5777", desc: "Alojamiento temporal y apoyo comunitario (Capacidad: 60 personas).", imagen:"/SAFEN/img/La Paz/IglesiaEvangelicaCentroamericanaEsperanzaViva.jpg.jpeg"},
                { nombre: "CASA COMUNAL CANTÓN COMALAPA", dirc: "Canton Comalapa KM 32 1/2 carreteta antigua a Zacatecoluca", tel: "7270-2131", desc: "Resguardo temporal y espacios seguros (Capacidad: 80 personas).", imagen:"/SAFEN/img/La Paz/CasaComunalCantonComalapa.jpg.jpeg" },
                { nombre: "ANFITEATRO LA HERRADURA", dirc: "Barrio San Luis, calle Principal", tel: "7065-3686", desc: "Áreas amplias y seguras para emergencias (Capacidad: 40 personas).", imagen:"/SAFEN/img/La Paz/AltiteatroLaHerradura.jpg.jpeg"},
                { nombre: "CASA COMUNAL LAS ISLETAS", dirc: "Canton Las Isletas, San Pedro Masahuat", tel: "7592-4144", desc: "Protección y alojamiento temporal (Capacidad: 50 personas).", imagen:"/SAFEN/img/La Paz/CasaComunalLasIsletas.jpg.jpeg" },
                { nombre: "ESCUELA DE DESARROLLO HUMANO", dirc: "Col. 27 de Septiembre, Zacatecoluca", tel: "7404-4613", desc: "Resguardo temporal y apoyo básico (Capacidad: 30 personas).", imagen:"/SAFEN/img/La Paz/EscuelaDeDesarrolloHumano.jpg.jpeg" },
                { nombre: "POLIDEPORTIVO 27 DE SEPTIEMBRE", dirc: "Col. 27 de Septiembre, Zacatecoluca", tel: "7404-4613", desc: "Instalaciones amplias para desastres naturales (Capacidad: 60 personas).", imagen:"/SAFEN/img/La Paz/Polideportivo27DeSeptiembre.jpg.jpeg" },
                { nombre: "CENTRO DEPORTIVO EL TUCO ALFARO", dirc: "Barrio Los Remedios, Zacatecoluca", tel: "7116-1129", desc: "Espacios adaptados para el resguardo (Capacidad: 50 personas).", imagen:"/SAFEN/img/La Paz/CentroDeportivoElTucoAlfaro.jpg.jpeg" }
            ],
            launion: [
                { nombre: "CASA DE RETIRO EL MELONAL", dirc: "Conchagua | La Unión Sur", tel: "2680-3301", desc: "Instalaciones amplias para numerosas familias.", imagen:"/SAFEN/img/La Unión/casa de retiro el melonal.webp"  },
                { nombre: "CASA COMUNAL CANTÓN YOLOGUAL", dirc: "Conchagua | La Unión Sur", tel: "2680-3301", desc: "Espacio comunitario para familias evacuadas.", imagen:"/SAFEN/img/La Unión/casa comunal yologual.jpg" },
                { nombre: "CANTÓN OLOMEGA", dirc: "El Carmen | La Unión Sur", tel: "2609-7000", desc: "Protección contra lluvias e inundaciones.",imagen:"/SAFEN/img/La Unión/cantón olomega.jpg" },
                { nombre: "ALCALDÍA EL SAUCE", dirc: "El Sauce | La Unión Norte", tel: "2647-7006", desc: "Estructura segura y centro de coordinación.",imagen:"/SAFEN/img/La Unión/alcaldía el sauce.jpg" },
                { nombre: "CENTRO DE ATENCIÓN PARA MIGRANTES", dirc: "La Unión | La Unión Sur", tel: "2609-7000", desc: "Asistencia social y refugio.",imagen:"/SAFEN/img/La Unión/CentroDeAtenciónParaMigrantes.jpg" },
                { nombre: "DISTRITO MUNICIPAL LAS TUNAS", dirc: "La Unión | La Unión Sur", tel: "2609-7000", desc: "Utilizado en evacuaciones masivas.",imagen:"/SAFEN/mg/La Unión/Las-Tuna.jpg" },
                { nombre: "CASA COMUNAL LISLIQUE", dirc: "Lislique | La Unión Norte", tel: "2609-7000", desc: "Acondicionado por Protección Civil.",imagen:"/SAFEN/img/La Unión/casa comunal lislique.jpg" },
                { nombre: "CENTRO DE DESARROLLO MEANGUERA", dirc: "Meanguera del Golfo | La Unión Sur", tel: "2609-7000", desc: "Protección y descanso temporal.",imagen:"/SAFEN/img/La Unión/CentroDeDesarrolloMeanguer.JPG" },
                { nombre: "IGLESIA CATÓLICA SAN JOSÉ", dirc: "Meanguera del Golfo | La Unión Sur", tel: "2609-7000", desc: "Punto de apoyo y alimentación.",imagen:"/SAFEN/img/La Unión/iglesia san jose.webp" },
                { nombre: "ALCALDÍA DE NUEVA ESPARTA", dirc: "Nueva Esparta | La Unión Norte", tel: "2609-7000", desc: "Ubicación céntrica y segura.",imagen:"/SAFEN/img/La Unión/poloros.webp" },
                { nombre: "CASA COMUNAL EL POLVO", dirc: "Pasaquina | La Unión Norte", tel: "2609-7000", desc: "Para familias afectadas por inundaciones.",imagen:"/SAFEN/img/La Unión/CasaComunalElPolvo.jpg" },
                { nombre: "SALÓN DE USOS MÚLTIPLES POLORÓS", dirc: "Polorós | La Unión Norte", tel: "2609-7000", desc: "Espacio para camas temporales.",imagen:"/SAFEN/img/La Unión/poloros.webp" },
                { nombre: "CASA COMUNAL BARRIO LA CRUZ", dirc: "San Alejo | La Unión Sur", tel: "2609-7000", desc: "Albergue para familias en riesgo.",imagen:"/SAFEN/img/La Unión/casa comunal barrio la cruz.jpg" },
                { nombre: "DIRECCIÓN GENERAL DE GANADERÍA", dirc: "Santa Rosa de Lima | La Unión Norte", tel: "2645-8600", desc: "Edificio seguro para alojamiento.",imagen:"/SAFEN/img/La Unión/dereccion general de ganaderia.jpg" },
                { nombre: "CASA COMUNAL DE YAYANTIQUE", dirc: "Yayantique | La Unión Sur", tel: "2609-7000", desc: "Protección básica inmediata.",imagen:"/SAFEN/img/La Unión/casa comunal de yayantique.jpg" },
                { nombre: "AUDITORIO PARROQUIAL YUCUAIQUÍN", dirc: "Yucuaiquín | La Unión Sur", tel: "2609-7000", desc: "Apoyo comunitario y logística.",imagen:"/SAFEN/img/La Unión/auditorio parroquial yucuaiquin.jpg" }
            ],
            morazan: [
                { nombre: "CASA COMUNAL CACAOPERA", dirc: "Cacaopera | Morazán Norte", tel: "2654-7000", desc: "Protección básica y descanso.",imagen:"/SAFEN/img/Morazán/CasaComunalDeCacaopera.jpg.jpeg" },
                { nombre: "CASA COMUNAL CORINTO", dirc: "Corinto | Morazán Norte", tel: "2654-7000", desc: "Áreas adecuadas para familias evacuadas.",imagen:"/SAFEN/img/Morazán/CasaComunalDeCorinto.jpg.jpeg" },
                { nombre: "CASA COMUNAL DELICIAS", dirc: "Delicias de Concepción | Morazán Sur", tel: "2654-7000", desc: "Refugio ante desastres naturales.",imagen:"/SAFEN/img/Morazán/CasaComunalDeliciasDeConcepción.jpg.jpeg" },
                { nombre: "CENTRO DESARROLLO DE LA MUJER", dirc: "El Divisadero | Morazán Sur", tel: "2654-7000", desc: "Alojamiento seguro y atención básica.",imagen:"/SAFEN/img/Morazán/CentroDeDesarrolloDeLaMujer.jpg.jpeg" },
                { nombre: "CASA COMUNAL GUALOCOCTI", dirc: "Gualococti | Morazán Norte", tel: "2654-7000", desc: "Espacios seguros para descanso.",imagen:"/SAFEN/img/Morazán/CasaComunalDeGualococti.jpg.jpeg" },
                { nombre: "S.U.M. JOATECA", dirc: "Joateca | Morazán Norte", tel: "2654-7000", desc: "Espacio amplio con áreas de descanso.",imagen:"/SAFEN/img/Morazán/SalondDeUsosMultiplesJoateca.jpg.jpeg" },
                { nombre: "CASA DE LA JUVENTUD", dirc: "Perquín | Morazán Norte", tel: "2654-7000", desc: "Para personas evacuadas y apoyo.",imagen:"/SAFEN/img/Morazán/CasaDeJuventud.jpg.jpeg" },
                { nombre: "CENTRO SOCIAL MUNICIPAL", dirc: "S.F. Gotera | Morazán Sur", tel: "2654-7000", desc: "Organización de ayuda y protección.",imagen:"/SAFEN/img/Morazán/CentroSocialMunicipalDeYamabal.jpg.jpeg" },
                { nombre: "S.U.M. SOCIEDAD", dirc: "Sociedad | Morazán Sur", tel: "2654-7000", desc: "Refugio temporal adaptable.",imagen:"/SAFEN/img/Morazán/SalonDeUsosMultiplesDeSociedad.jpg.jpeg" },
                { nombre: "CENTRO SOCIAL YAMABAL", dirc: "Yamabal | Morazán Sur", tel: "2654-7000", desc: "Protección durante emergencias.",imagen:"/SAFEN/img/Morazán/CentroSocialMunicipalDeYamabal.jpg.jpeg" }
            ],
            sanmiguel: [
                { nombre: "CASA COMUNAL CHAPELTIQUE", dirc: "Chapeltique | San Miguel Norte", tel: "2660-7000", desc: "Alojamiento básico ante emergencias.",imagen:"/SAFEN/img/San Miguel/CasaComunalCuidadBarrios.jpg.jpeg" },
                { nombre: "C.E. DAVID J. GUZMÁN", dirc: "Chinameca | San Miguel Oeste", tel: "2660-7000", desc: "Organización de refugio masivo.",imagen:"/SAFEN/img/San Miguel/CasaComunalDeSesori.jpg.jpeg" },
                { nombre: "CASA DE LA CULTURA", dirc: "Ciudad Barrios | San Miguel Norte", tel: "2660-7000", desc: "Apoyo y distribución de ayuda.",imagen:"/SAFEN/img/San Miguel/CentroDeConvencionesHectorManuelPortillo.jpg.jpeg" },
                { nombre: "ALCALDÍA EL TRÁNSITO", dirc: "El Tránsito | San Miguel Oeste", tel: "2660-7000", desc: "Estructura segura para emergencias.",imagen:"/SAFEN/img/San Miguel/CentroDeFormaciónSanOscarAlnulfoRomero.jpg.jpeg" },
                { nombre: "CASA COMUNAL LOLOTIQUE", dirc: "Lolotique | San Miguel Norte", tel: "2660-7000", desc: "Descanso y atención inmediata.",imagen:"/SAFEN/img/San Miguel/CasaComunalDeQuelepa.jpg.jpeg" }
            ],
            sansalvador: [
                { nombre: "CENTRO FORMACIÓN MUJER", dirc: "Aguilares | S.S. Norte", tel: "2284-8400", desc: "Alojamiento y atención humanitaria.", imagen:"/SAFEN/img/San Salvador/CentroFormacionMujer.jpg" },
                { nombre: "CASA JUVENTUD GUAZAPA", dirc: "Guazapa | S.S. Norte", tel: "2284-8400", desc: "Protección contra tormentas.", imagen:"/SAFEN/img/San Salvador/CasaDeLaJuventudGuazapa.jpg.jpeg"  },
                { nombre: "CASA COMUNAL SAN BARTOLO", dirc: "Ilopango | S.S. Este", tel: "2295-7000", desc: "Descanso para familias evacuadas.", imagen:"/SAFEN/img/San Salvador/CasaComunalNovenaEtapaSanBartolo.jpg.jpeg"  },
                { nombre: "IGLESIA PAN DE VIDA", dirc: "Panchimalco | S.S. Sur", tel: "2284-8400", desc: "Refugio y alimentación.", imagen:"/SAFEN/img/San Salvador/IglesiaPanDeVida.jpg.jpeg"  },
                { nombre: "CASA COMUNAL PANCHIMALCO", dirc: "Panchimalco | S.S. Sur", tel: "2284-8400", desc: "Para zonas vulnerables.", imagen:"/SAFEN/img/San Salvador/CasaComunalDePanchimalco.jpg.jpeg"  },
                { nombre: "COMUDES PANCHIMALCO", dirc: "Panchimalco | S.S. Sur", tel: "2284-8400", desc: "Refugio y distribución de ayuda.", imagen:"/SAFEN/img/San Salvador/ComudesPanchimalco.jpg.jpeg"  },
                { nombre: "CASA COMUNAL ROSARIO DE MORA", dirc: "Rosario de Mora | S.S. Sur", tel: "2284-8400", desc: "Para familias afectadas.", imagen:"/SAFEN/img/San Salvador/CasaComunalRosarioDeMora.jpg.jpeg"  },
                { nombre: "POLIDEPORTIVO SAN MARCOS", dirc: "San Marcos | S.S. Sur", tel: "2280-9600", desc: "Gran capacidad para descanso masivo.", imagen:"/SAFEN/img/San Salvador/PolideportivoJardinesDeSanMarcos.jpg.jpeg"  },
                { nombre: "IGLESIA MONTE DE ISRAEL", dirc: "San Marcos | S.S. Sur", tel: "2280-9600", desc: "Protección básica y segura.", imagen:"/SAFEN/img/San Salvador/IglesiaMonteIsrael.jpg.jpeg"  },
                { nombre: "VILLA JUVENTUD EX IRA", dirc: "San Martín | S.S. Este", tel: "2284-8400", desc: "Atención básica a afectados.", imagen:"/SAFEN/img/San Salvador/VillaDeLaJuventudExIra.jpg.jpeg"  },
                { nombre: "PARQUE EL RECREO", dirc: "San Martín | S.S. Este", tel: "2284-8400", desc: "Áreas techadas para evacuación.", imagen:"/SAFEN/img/San Salvador/ParqueRecreativoVenecia.jpg.jpeg"  },
                { nombre: "CASA COMUNAL LA MASCOTA", dirc: "San Salvador | Centro", tel: "2511-6000", desc: "Protección ante inundaciones urbanas.", imagen:"/SAFEN/img/San Salvador/CasComunalComunidadLaMascota.jpg.jpeg"  },
                { nombre: "CASA COMUNAL NUEVA ISRAEL", dirc: "San Salvador | Centro", tel: "2511-6000", desc: "Atención en zonas vulnerables.", imagen:"/SAFEN/img/San Salvador/CasaComunalDiesDeOctubreNuevaIsrael.jpg.jpeg"  },
                { nombre: "C. CONVIVENCIA SIERRA MORENA", dirc: "Soyapango | S.S. Este", tel: "2292-7500", desc: "Espacio amplio para ayuda.", imagen:"/SAFEN/img/San Salvador/CentroDeConvienciaSierraMorena.jpg.jpeg"  },
                { nombre: "C. MUNICIPAL CIUDAD CREDISA", dirc: "Soyapango | S.S. Este", tel: "2292-7500", desc: "Asistencia comunitaria.", imagen:"/SAFEN/img/San Salvador/CentroMunicipalDeConvivenciaCuidadCredispa.jpg.jpeg"  },
                { nombre: "CASA COMUNAL COL. GUADALUPE", dirc: "Soyapango | S.S. Este", tel: "2292-7500", desc: "Refugio masivo disponible.", imagen:"/SAFEN/img/San Salvador/CasaComunalColoniaGuadalupe.jpg.jpeg"  },
                { nombre: "PARQUE VENECIA", dirc: "Soyapango | S.S. Este", tel: "2292-7500", desc: "Protección a evacuados.", imagen:"/SAFEN/img/San Salvador/ParqueRecreativoVenecia.jpg.jpeg"  },
                { nombre: "C. COMUNITARIO MSOR. ROMERO", dirc: "Tonacatepeque | S.S. Este", tel: "2284-8400", desc: "Apoyo social y refugio.", imagen:"/SAFEN/img/San Salvador/CentroComunitarioMonseñorRomero.jpg.jpeg"  },
                { nombre: "EXCLÍNICA DISTRITA ITALIA", dirc: "Tonacatepeque | S.S. Este", tel: "2284-8400", desc: "Estructura segura para protección.", imagen:"/SAFEN/img/San Salvador/ExclinicsComunalDistritoItalia.jpg.jpeg"  }
            ],
            sanvicente: [
                { nombre: "CASA COMUNAL APASTEPEQUE", dirc: "Apastepeque | S.V. Norte", tel: "2393-7000", desc: "Protección, descanso y atención básica.", imagen:"/SAFEN/img/San Vicente/CasaComunalDeApastepeque.jpg.jpeg" },
                { nombre: "C.E. GUADALUPE", dirc: "Guadalupe | S.V. Sur", tel: "2393-7000", desc: "Aulas amplias y áreas techadas.", imagen:"/SAFEN/img/San Vicente/CasaDeLaMujerDeGuadalupe.jpg.jpeg" },
                { nombre: "CASA COMUNAL SAN CAYETANO", dirc: "San Cayetano Istepeque | S.V. Norte", tel: "2393-7000", desc: "Punto de reunión y protección.", imagen:"/SAFEN/img/San Vicente/CasaComunalDeSanCayetanoIstepeque.jpg.jpeg" },
                { nombre: "CASA COMUNAL SAN ESTEBAN", dirc: "San Esteban Catarina | S.V. Norte", tel: "2393-7000", desc: "Protección y ayuda humanitaria.", imagen:"/SAFEN/img/San Vicente/CasaDeencuentrojuvenil.jpeg" },
                { nombre: "C.E. SAN ILDEFONSO", dirc: "San Ildefonso | S.V. Norte", tel: "2393-7000", desc: "Seguridad para familias afectadas.", imagen:"/SAFEN/img/San Vicente/CasaComunalDeSantaClara.jpg.jpeg" },
                { nombre: "CASA COMUNAL VERAPAZ", dirc: "Verapaz | S.V. Sur", tel: "2393-7000", desc: "Protección y asistencia inmediata.", imagen:"/SAFEN/img/San Vicente/Casacomunalverapaz.jpeg" },
                { nombre: "CASA COMUNAL SAN SEBASTIÁN", dirc: "San Sebastián | S.V. Norte", tel: "2393-7000", desc: "Apoyo inmediato a evacuados.", imagen:"/SAFEN/img/San Vicente/CasaComunalDeSantoDomingo.jpg.jpeg" },
                { nombre: "INSTITUTO NACIONAL SAN VICENTE", dirc: "San Vicente | S.V. Sur", tel: "2393-7000", desc: "Refugio de gran capacidad.", imagen:"/SAFEN/img/San Vicente//CasaComunalDeCañaverales.jpg.jpeg" },
                { nombre: "CASA COMUNAL TECOLUCA", dirc: "Tecoluca | S.V. Sur", tel: "2393-7000", desc: "Áreas de descanso y apoyo.", imagen:"/SAFEN/img/San Vicente/MegaAlbergueDeTecoluca.jpg.jpeg" }
            ],
            santaana: [
                { nombre: "CASA COMUNAL CANDELARIA", dirc: "Candelaria Frontera | S.A. Oeste", tel: "2484-7500", desc: "Protección y alojamiento básico.", imagen:"/SAFEN/img/Santa Ana/CasaComunalCandelaria.jpg" },
                { nombre: "C.E. CHALCHUAPA", dirc: "Chalchuapa | S.A. Oeste", tel: "2484-7500", desc: "Instalaciones amplias techadas.", imagen:"/SAFEN/img/Santa Ana/C.EChalchuapa.jpg"  },
                { nombre: "CASA COMUNAL COATEPEQUE", dirc: "Coatepeque | S.A. Este", tel: "2484-7500", desc: "Descanso y atención inmediata.", imagen:"/SAFEN/img/Santa Ana/CasaComunalCoatepeque.jpg" },
                { nombre: "C.E. EL CONGO", dirc: "El Congo | S.A. Este", tel: "2484-7500", desc: "Aulas amplias para refugio.", imagen:"/SAFEN/img/Santa Ana/CasaComunalMetapan.jpg.webp" },
                { nombre: "CASA COMUNAL MASAHUAT", dirc: "Masahuat | S.A. Oeste", tel: "2484-7500", desc: "Áreas de descanso para afectados.", imagen:"/SAFEN/img/Santa Ana/CasaComunalDeMasahuat.jpg.JPG" },
                { nombre: "INSTITUTO NACIONAL METAPÁN", dirc: "Metapán | S.A. Norte", tel: "2484-7500", desc: "Alimentación y atención humanitaria.", imagen:"/SAFEN/img/Santa Ana/InstitutoNacionalSantaAna.jpg" },
                { nombre: "CASA COMUNAL S.A. PAJONAL", dirc: "S.A. Pajonal | S.A. Norte", tel: "2484-7500", desc: "Protección y asistencia inmediata.", imagen:"/SAFEN/img/Santa Ana/CasaComunalS.APajonal.jpg" },
                { nombre: "CASA COMUNAL S.S. SALITRILLO", dirc: "S.S. Salitrillo | S.A. Oeste", tel: "2484-7500", desc: "Apoyo comunitario organizado.", imagen:"/SAFEN/img/Santa Ana/CentroComunitarioDeSanEstebanSalitrillo.jpg.webp" },
                { nombre: "INSTITUTO NACIONAL SANTA ANA", dirc: "Santa Ana | Centro", tel: "2441-0000", desc: "Refugio principal de gran capacidad.", imagen:"/SAFEN/img/Santa Ana/InstitutoNacionalSantaAna.jpg" }
            ],
            sonsonate: [
                { nombre: "CASA COMUNAL ACAJUTLA", dirc: "Acajutla | Sonsonate Oeste", tel: "2429-7300", desc: "Protección y alojamiento básico.", imagen:"/SAFEN/img/Sonsonate/CasaComunalAcajutla.jpg"},
                { nombre: "CASA COMUNAL ARMENIA", dirc: "Armenia | Sonsonate Este", tel: "2429-7300", desc: "Descanso y protección.", imagen:"/SAFEN/img/Sonsonate/CasaComunalArmenia.jpg" },
                { nombre: "C.E. IZALCO", dirc: "Izalco | Sonsonate Este", tel: "2429-7300", desc: "Instalaciones amplias y techadas.", imagen:"/SAFEN/img/Sonsonate/C.EIzalco.jpg" },
                { nombre: "CASA CULTURA JUAYÚA", dirc: "Juayúa | Sonsonate Norte", tel: "2429-7300", desc: "Espacios amplios y seguros.", imagen:"/SAFEN/img/Sonsonate/CasaCulturaJuayua.jpg" },
                { nombre: "CASA COMUNAL NAHUIZALCO", dirc: "Nahuizalco | Sonsonate Norte", tel: "2429-7300", desc: "Alojamiento temporal adecuado.", imagen:"/SAFEN/img/Sonsonate/CasaComunalNahuizalco.jpg" },
                { nombre: "CASA COMUNAL SALCOATITÁN", dirc: "Salcoatitán | Sonsonate Norte", tel: "2429-7300", desc: "Se coordina ayuda humanitaria.", imagen:"/SAFEN/img/Sonsonate/CasaComunalSaalcotitán.jpg" },
                { nombre: "INSTITUTO NACIONAL SONSONATE", dirc: "Sonsonate | Centro", tel: "2451-0000", desc: "Refugio principal con gran capacidad.", imagen:"/SAFEN/img/Sonsonate/InstitutoNacionalSonsonate.jpg" },
                { nombre: "CASA COMUNAL SONZACATE", dirc: "Sonzacate | Sonsonate Este", tel: "2429-7300", desc: "Apoyo ante desastres naturales.", imagen:"/SAFEN/img/Sonsonate/CasaComunalSonzacate.jpg" },
                { nombre: "CASA COMUNAL CALUCO", dirc: "Caluco | Sonsonate Este", tel: "2429-7300", desc: "Adaptado como refugio temporal.", imagen:"/SAFEN/img/Sonsonate/CasaComunalCaluco.jpg" },
                { nombre: "CASA COMUNAL CUISNAHUAT", dirc: "Cuisnahuat | Sonsonate Este", tel: "2429-7300", desc: "Protección ante inundaciones.", imagen:"/SAFEN/img/Sonsonate/CasaComunalCuisnahuat.jpg" },
                { nombre: "CASA COMUNAL S.A. DEL MONTE", dirc: "S.A. del Monte | Centro", tel: "2429-7300", desc: "Organización de ayuda.", imagen:"/SAFEN/img/Sonsonate/CasaComunalS.A.DelMonte.jpg" },
                { nombre: "CASA COMUNAL S.C. MASAHUAT", dirc: "S.C. Masahuat | Norte", tel: "2429-7300", desc: "Asistencia humanitaria disponible.", imagen:"/SAFEN/img/Sonsonate/CasaComunalS.C.Masahuat.jpg" },
                { nombre: "CASA COMUNAL S.I. ISHUATÁN", dirc: "S.I. Ishuatán | Oeste", tel: "2429-7300", desc: "Seguridad básica y descanso.", imagen:"/SAFEN/img/Sonsonate/CasaComunalS.I.Ishuat.jpg" },
                { nombre: "CASA COMUNAL S.D. GUZMÁN", dirc: "S.D. Guzmán | Norte", tel: "2429-7300", desc: "Atención inmediata a evacuados.", imagen:"/SAFEN/img/Sonsonate/CasaComunalS.D.Gusmán.jpg" }
            ],
            usulutan: [
                { nombre: "CASA COMUNAL ALEGRÍA", dirc: "Alegría | Usulután Norte", tel: "2624-7000", desc: "Protección y alojamiento básico.", imagen:"/SAFEN/img/Usulután/150 CASA COMUNAL DE ALEGRIA.jpg.webp" },
                { nombre: "C.E. BERLÍN", dirc: "Berlín | Usulután Norte", tel: "2624-7000", desc: "Atención comunitaria organizada.", imagen:"/SAFEN/img/Usulután/C.EBerlín.jpg" },
                { nombre: "CASA COMUNAL JIQUILISCO", dirc: "Jiquilisco | Usulután Oeste", tel: "2624-7000", desc: "Para familias de zonas vulnerables.", imagen:"/SAFEN/img/Usulután/CasaComunalJiquilisco.jpg" },
                { nombre: "C.E. PUERTO EL TRIUNFO", dirc: "Pto. El Triunfo | Oeste", tel: "2624-7000", desc: "Aulas para emergencias costeras.", imagen:"/SAFEN/img/Usulután/C.EPuertoElTriunfo.jpg" },
                { nombre: "CASA COMUNAL SANTIAGO MARÍA", dirc: "Santiago María | Norte", tel: "2624-7000", desc: "Protección por fenómenos naturales.", imagen:"/SAFEN/img/Usulután/CasaComunalSantiagoDeMaría.jpg" },
                { nombre: "CASA COMUNAL TECAPÁN", dirc: "Tecapán | Usulután Norte", tel: "2624-7000", desc: "Asistencia inmediata a evacuados.", imagen:"/SAFEN/img/Usulután/CasaComunalTecapán.jpg" },
                { nombre: "INSTITUTO NACIONAL USULUTÁN", dirc: "Usulután | Este", tel: "2662-0000", desc: "Refugio principal del departamento.", imagen:"/SAFEN/img/Usulután/InstitutoNacionalDeUsulután.jpg" },
                { nombre: "CASA COMUNAL JUCUAPA", dirc: "Jucuapa | Usulután Norte", tel: "2624-7000", desc: "Organización de ayuda humanitaria.", imagen:"/SAFEN/img/Usulután/CasaComunalDeJucuapa.jpg" }
            ]
        };

        function showShelters(dept) {
            document.getElementById('view-departments').style.display = 'none';
            const listContainer = document.getElementById('shelters-list');
            const titulos = {
                ahuachapan: "Ahuachapán", cabanas: "Cabañas", chalatenango: "Chalatenango",
                cuscatlan: "Cuscatlán", lalibertad: "La Libertad", lapaz: "La Paz",
                launion: "La Unión", morazan: "Morazán", sanmiguel: "San Miguel",
                sansalvador: "San Salvador", sanvicente: "San Vicente", santaana: "Santa Ana",
                sonsonate: "Sonsonate", usulutan: "Usulután"
            };
            document.getElementById('dept-title').innerText = "Refugios en " + (titulos[dept] || dept);
            listContainer.innerHTML = (data[dept] || []).map(item => `
    <div class="shelter-info-block">

        ${item.imagen ? `
        <div class="shelter-modal-image"
             style="background-image: url('${item.imagen}')">
        </div>
        ` : ''}

        <h3 class="pink-title">${item.nombre}</h3>

        <div class="info-row">
            <span class="blue-icon">📍</span>
            <strong>Ubicación</strong>
            <p>${item.dirc}</p>
        </div>

        <div class="info-row">
            <span class="blue-icon">📞</span>
            <strong>Contacto</strong>
            <p>${item.tel}</p>
        </div>

        <div class="info-row">
            <span class="blue-icon">📎</span>
            <strong>Descripción</strong>
            <p>${item.desc}</p>
        </div>

    </div>
    <hr class="shelter-hr">
`).join('');
            document.getElementById('view-shelters').style.display = 'block';
        }

        function toggleModal() {
            const modal = document.getElementById('locationModal');
            modal.classList.toggle('active');
            if(!modal.classList.contains('active')) showDepartments();
        }

        function showDepartments() {
            document.getElementById('view-departments').style.display = 'block';
            document.getElementById('view-shelters').style.display = 'none';
        }