const data = {
            ahuachapan: [
                { nombre: "GIMNASIO LOS PINITOS", dirc: "Ahuachapán Centro | Ave morazan", tel: "7736-9467", desc: "Refugio temporal de amplia capacidad.", imagen:"img/Ahuachapan/cmunalataco.jpg"},
                { nombre: "CASA COMUNAL APANECA", dirc: "Ahuachapán Centro | Bo. El Centro", tel: "7380-4612", desc: "Resguardo para la comunidad de Apaneca.", imagen:"img/Ahuachapan/comunaljujutla.jpg"},
                { nombre: "CASA COMUNAL ATACO", dirc: "Ahuachapán Centro | 3era calle Ote", tel: "7577-7205", desc: "Centro de resguardo en Ataco.", imagen:"img/Ahuachapan/cmunalataco.jpg"},
                { nombre: "CASA COMUNAL GUAYMANGO", dirc: "Ahuachapán Sur | Barrio el centro", tel: "6985-9635", desc: "Ubicado frente al centro educativo.", imagen:"img/Ahuachapan/comunalguaymango.jpg" },
                { nombre: "CASA COMUNAL EL MANGO", dirc: "Jujutla | Ahuachapán Sur", tel: "7889-8708", desc: "Refugio del distrito municipal.", imagen:"img/Ahuachapan/comunalelmango.jpg" },
                { nombre: "NUEVO AMANECER", dirc: "San Francisco Menéndez | Ahuachapán Sur", tel: "7627-5788", desc: "Ubicado en la carretera litoral.", imagen:"img/Ahuachapan/comunalnuevoamanecer.jpg" },
                { nombre: "CASA COMUNAL SAN PEDRO PUXTLA", dirc: "Ahuachapán Sur | Bo. San Pablo", tel: "7059-8000", desc: "Refugio frente a la alcaldía.", imagen:"img/Ahuachapan/comunalsanpedropuxtla.jpg" },
                { nombre: "PREDIO DEL MERCADO", dirc: "Tacuba | Ahuachapán Centro", tel: "7886-6785", desc: "Predio municipal en Tacuba.", imagen:"img/Ahuachapan/mercadotacuba.jpg"},
                { nombre: "CASA COMUNAL VALLE LA PUERTA", dirc: "Tacuba | Ahuachapán Centro", tel: "7672-5256", desc: "Refugio en zona rural de Tacuba.", imagen:"img/Ahuachapan/comunalVallelapuerta.jpg" }
            ],
            cabanas: [
                { nombre: "LAS GOLONDRINAS ILOBASCO", dirc: "Lot. La Virgen Lote 13 Polígono C, Ilobasco, Cabañas Oeste", tel: "7592-2725", desc: "Ofrece alojamiento temporal y espacio seguro (Capacidad: 30 personas).", imagen:"img/Cabanas/LasGolondrinasIlobasco.jpg" },
                { nombre: "POLIDEPORTIVO DE SENSUNTEPEQUE", dirc: "Barrio los remedios, col. Las brisas, Sensuntepeque", tel: "7478-4982", desc: "Áreas amplias para familias evacuadas (Capacidad: 30 personas).", imagen:"img/Cabanas/PolidepVictoria.jpeg" },
                { nombre: "CASA COMUNAL VICTORIA", dirc: "Barrio el centro, distrito de Victoria, Cabañas Este", tel: "7478-4982", desc: "Protección y apoyo básico en situación de riesgo (Capacidad: 40 personas).", imagen:"img/Cabanas/ComunalVictoria.jpeg" }
            ],
            chalatenango: [
                { nombre: "CASA COMUNAL CITALÁ", dirc: "Calle Manuel José Arce frente a Parque Municipal", tel: "7482-3336", desc: "Alojamiento temporal y protección (Capacidad: 40 personas).", imagen:"img/Chalatenango/CasaComunalCitala.jpeg" },
                { nombre: "S.U.M. JARDINES DEL PARAÍSO", dirc: "Calle Principal Barrio San Luis, El Paraíso", tel: "7813-4492", desc: "Espacio seguro y resguardo temporal (Capacidad: 50 personas).",imagen:"img/Chalatenango/SalonUsosMultipesJardinesDelParaiso.jpeg" },
                { nombre: "COMPLEJO CRISTIANO LA PALMA", dirc: "Barrio La Tejera, La Palma", tel: "6456-5226", desc: "Apoyo básico y alojamiento temporal (Capacidad: 40 personas).", imagen:"img/Chalatenango/ComplejoCristianoLaPalma.jpeg" },
                { nombre: "CENTRO OBRERO DR. MARIO ZAMORA", dirc: "Caserio el refugio canton el gramal", tel: "7686-0344", desc: "Espacios amplios para atender familias (Capacidad: 70 personas).", imagen:"img/Chalatenango/CentroObreroDoctorMarioZamora.jpeg"}
            ],
            cuscatlan: [
                { nombre: "ACOSAMA", dirc: "Calle principal de San Pedro Perulapán", tel: "7364-9543", desc: "Alojamiento temporal y espacios seguros (Capacidad: 90 personas).", imagen:"img/Cuscatlan/Acosama.jpeg" },
                { nombre: "IGLESIA SAN RAFAEL ARCÁNGEL", dirc: "Avenida Manuel Rico, Barrio el Centro, Suchitoto", tel: "7628-6942", desc: "Protección y alojamiento temporal (Capacidad: 30 personas).", imagen:"img/Cuscatlan/IglesiaSanRafaelArcangel.jpeg" },
                { nombre: "IGLESIA ASAMBLEA DE DIOS JEHOVÁ NISSI", dirc: "Colonia y Avenida Las Mercedes, Suchitoto", tel: "7628-6942", desc: "Apoyo comunitario y espacios seguros (Capacidad: 30 personas).", imagen:"img/Cuscatlan/IglesiaAsambleaDeDiosJehovaNissi.jpeg" },
                { nombre: "S.U.M. ANEXO DISTRITO SAN RAMÓN", dirc: "Barrio el Centro, calle principal, San Ramón", tel: "7396-6483", desc: "Alojamiento y condiciones básicas (Capacidad: 30 personas).", imagen:"img/Cuscatlan/SalonDeUsosMultiplesAnexoSanRamon.jpeg" },
                { nombre: "EL MERCADO ANEXO COMUNAL", dirc: "Barrio el centro, Santa Cruz Analquito", tel: "7693-5787", desc: "Resguardo temporal y apoyo básico (Capacidad: 32 personas).", imagen:"img/Cuscatlan/MercaditoAnexoComunal.jpeg" },
                { nombre: "CENTRO DE CONVIVENCIA CIUDADANA", dirc: "Barrio Santa Lucia, Suchitoto", tel: "6007-0429", desc: "Instalaciones amplias y seguras (Capacidad: 68 personas).", imagen:"img/Cuscatlan/CentroDeConvivenciaCuidadana.jpeg" }
            ],
            lalibertad: [
                { nombre: "S.U.M. WALTER THILO DEININGER", dirc: "Frente a parque de Antiguo Cuscatlán", tel: "7630-9796", desc: "Amplios espacios de resguardo (Capacidad: 150 personas).", imagen:"img/LaLibertad/SalonDeUsosMultiplesWalterThiloDeininger.jpeg"},
                { nombre: "CASA COMUNAL CHILTIUPÁN", dirc: "Barrio Santo Domingo, calle principal, Chiltiupán", tel: "7923-2829", desc: "Protección y apoyo básico (Capacidad: 60 personas).", imagen:"img/LaLibertad/CasaComunalChiltiupan.jpeg"},
                { nombre: "CASA COMUNAL EL ZONTE", dirc: "Cantón el Zonte, caserío Espíritu Santo", tel: "7704-9741", desc: "Alojamiento temporal y espacios seguros (Capacidad: 40 personas).", imagen:"img/LaLibertad/CasaComunalElZonte.jpeg" },
                { nombre: "S.U.M. DE COLÓN", dirc: "Parque Comunal de Colón", tel: "7853-6631", desc: "Resguardo y atención básica (Capacidad: 40 personas).", imagen:"img/LaLibertad/SalonDeUsosMultiplesColonEnParqueComunalDeColon.jpeg"},
                { nombre: "CASA COMUNAL LAS CONCHITAS", dirc: "Colonia las Conchitas, Colón", tel: "7853-6631", desc: "Alojamiento temporal y apoyo (Capacidad: 30 personas).", imagen:"img/LaLibertad/CasaComunalLasConchitas.jpeg" },
                { nombre: "CASA COMUNAL COMASAGUA", dirc: "Alcaldía de Comasagua", tel: "6017-0861", desc: "Protección y espacios seguros (Capacidad: 40 personas).", imagen:"img/LaLibertad/CasaComunalComasagua.jpeg" },
                { nombre: "CASA COMUNAL HUIZÚCAR", dirc: "Barrio el centro, Huizúcar", tel: "7229-5855", desc: "Resguardo temporal y atención básica (Capacidad: 50 personas).", imagen:"img/LaLibertad/CasaComunalHuizucar.jpeg" },
                { nombre: "IGLESIA EL CALVARIO HUIZÚCAR", dirc: "Calle principal, barrio el calvario", tel: "7794-228", desc: "Alojamiento temporal y apoyo básico (Capacidad: 70 personas).", imagen:"img/LaLibertad/IglesiaElCalvarioHuizucar.jpeg" },
                { nombre: "CENTRO OBRERO DR. HUMBERTO ROMERO", dirc: "Playa Conchalío km 37, La Libertad", tel: "7860-2001", desc: "Alojamiento temporal y apoyo comunitario (Capacidad: 100 personas).", imagen:"img/LaLibertad/CentroObrroDrHumbertoRomero.jpeg" },
                { nombre: "CENTRO ESCOLAR SAN ARTURO", dirc: "Cantón Cangrejera km 45.5, Puerto de la Libertad", tel: "6929-5516", desc: "Resguardo temporal y áreas seguras (Capacidad: 134 personas).", imagen:"img/LaLibertad/CentroEscolarSanArturo.jpeg" }
            ],
            lapaz: [
                { nombre: "IGLESIA ESPERANZA VIVA", dirc: "Barrio el centro, Santiago Nonualco", tel: "6135-5777", desc: "Alojamiento temporal y apoyo comunitario (Capacidad: 60 personas).", imagen:"img/LaPaz/IglesiaEvangelicaCentroamericanaEsperanzaViva.jpeg"},
                { nombre: "CASA COMUNAL CANTÓN COMALAPA", dirc: "Canton Comalapa KM 32 1/2 carreteta antigua a Zacatecoluca", tel: "7270-2131", desc: "Resguardo temporal y espacios seguros (Capacidad: 80 personas).", imagen:"img/LaPaz/CasaComunalCantonComalapa.jpeg" },
                { nombre: "ANFITEATRO LA HERRADURA", dirc: "Barrio San Luis, calle Principal", tel: "7065-3686", desc: "Áreas amplias y seguras para emergencias (Capacidad: 40 personas).", imagen:"img/LaPaz/AltiteatroLaHerradura.jpeg"},
                { nombre: "CASA COMUNAL LAS ISLETAS", dirc: "Canton Las Isletas, San Pedro Masahuat", tel: "7592-4144", desc: "Protección y alojamiento temporal (Capacidad: 50 personas).", imagen:"img/LaPaz/CasaComunalLasIsletas.jpeg" },
                { nombre: "ESCUELA DE DESARROLLO HUMANO", dirc: "Col. 27 de Septiembre, Zacatecoluca", tel: "7404-4613", desc: "Resguardo temporal y apoyo básico (Capacidad: 30 personas).", imagen:"img/LaPaz/EscuelaDeDesarrolloHumano.jpeg" },
                { nombre: "POLIDEPORTIVO 27 DE SEPTIEMBRE", dirc: "Col. 27 de Septiembre, Zacatecoluca", tel: "7404-4613", desc: "Instalaciones amplias para desastres naturales (Capacidad: 60 personas).", imagen:"img/LaPaz/Polideportivo27DeSeptiembre.jpeg" },
                { nombre: "CENTRO DEPORTIVO EL TUCO ALFARO", dirc: "Barrio Los Remedios, Zacatecoluca", tel: "7116-1129", desc: "Espacios adaptados para el resguardo (Capacidad: 50 personas).", imagen:"img/LaPaz/CentroDeportivoElTucoAlfaro.jpeg" }
            ],
            launion: [
                { nombre: "CASA DE RETIRO EL MELONAL", dirc: "Conchagua | La Unión Sur", tel: "2680-3301", desc: "Instalaciones amplias para numerosas familias.", imagen:"img/LaUnion/casaderetiroelmelonal.webp"  },
                { nombre: "CASA COMUNAL CANTÓN YOLOGUAL", dirc: "Conchagua | La Unión Sur", tel: "2680-3301", desc: "Espacio comunitario para familias evacuadas.", imagen:"img/LaUnion/casacomunalyologual.jpg" },
                { nombre: "CANTÓN OLOMEGA", dirc: "El Carmen | La Unión Sur", tel: "2609-7000", desc: "Protección contra lluvias e inundaciones.",imagen:"img/LaUnion/cantonolomega.jpg" },
                { nombre: "ALCALDÍA EL SAUCE", dirc: "El Sauce | La Unión Norte", tel: "2647-7006", desc: "Estructura segura y centro de coordinación.",imagen:"img/LaUnion/alcaldiaelsauce.jpg" },
                { nombre: "CENTRO DE ATENCIÓN PARA MIGRANTES", dirc: "La Unión | La Unión Sur", tel: "2609-7000", desc: "Asistencia social y refugio.",imagen:"img/LaUnion/CentroDeAtencionParaMigrantes.jpg" },
                { nombre: "DISTRITO MUNICIPAL LAS TUNAS", dirc: "La Unión | La Unión Sur", tel: "2609-7000", desc: "Utilizado en evacuaciones masivas.",imagen:"img/LaUnion/Las-Tuna.jpg" },
                { nombre: "CASA COMUNAL LISLIQUE", dirc: "Lislique | La Unión Norte", tel: "2609-7000", desc: "Acondicionado por Protección Civil.",imagen:"img/LaUnion/casacomunallislique.jpg" },
                { nombre: "CENTRO DE DESARROLLO MEANGUERA", dirc: "Meanguera del Golfo | La Unión Sur", tel: "2609-7000", desc: "Protección y descanso temporal.",imagen:"img/LaUnion/CentroDeDesarrolloMeanguer.JPG" },
                { nombre: "IGLESIA CATÓLICA SAN JOSÉ", dirc: "Meanguera del Golfo | La Unión Sur", tel: "2609-7000", desc: "Punto de apoyo y alimentación.",imagen:"img/LaUnion/iglesiasanjose.webp" },
                { nombre: "ALCALDÍA DE NUEVA ESPARTA", dirc: "Nueva Esparta | La Unión Norte", tel: "2609-7000", desc: "Ubicación céntrica y segura.",imagen:"img/LaUnion/poloros.webp" },
                { nombre: "CASA COMUNAL EL POLVO", dirc: "Pasaquina | La Unión Norte", tel: "2609-7000", desc: "Para familias afectadas por inundaciones.",imagen:"img/LaUnion/CasaComunalElPolvo.jpg" },
                { nombre: "SALÓN DE USOS MÚLTIPLES POLORÓS", dirc: "Polorós | La Unión Norte", tel: "2609-7000", desc: "Espacio para camas temporales.",imagen:"img/LaUnion/poloros.webp" },
                { nombre: "CASA COMUNAL BARRIO LA CRUZ", dirc: "San Alejo | La Unión Sur", tel: "2609-7000", desc: "Albergue para familias en riesgo.",imagen:"img/LaUnion/casacomunalbarriolacruz.jpg" },
                { nombre: "DIRECCIÓN GENERAL DE GANADERÍA", dirc: "Santa Rosa de Lima | La Unión Norte", tel: "2645-8600", desc: "Edificio seguro para alojamiento.",imagen:"img/LaUnion/derecciongeneraldeganaderia.jpg" },
                { nombre: "CASA COMUNAL DE YAYANTIQUE", dirc: "Yayantique | La Unión Sur", tel: "2609-7000", desc: "Protección básica inmediata.",imagen:"img/LaUnion/casacomunaldeyayantique.jpg" },
                { nombre: "AUDITORIO PARROQUIAL YUCUAIQUÍN", dirc: "Yucuaiquín | La Unión Sur", tel: "2609-7000", desc: "Apoyo comunitario y logística.",imagen:"img/LaUnion/auditorioparroquialyucuaiquin.jpg" }
            ],
            morazan: [
                { nombre: "CASA COMUNAL CACAOPERA", dirc: "Cacaopera | Morazán Norte", tel: "2654-7000", desc: "Protección básica y descanso.",imagen:"img/Morazan/CasaComunalDeCacaopera.jpeg" },
                { nombre: "CASA COMUNAL CORINTO", dirc: "Corinto | Morazán Norte", tel: "2654-7000", desc: "Áreas adecuadas para familias evacuadas.",imagen:"img/Morazan/CasaComunalDeCorinto.jpeg" },
                { nombre: "CASA COMUNAL DELICIAS", dirc: "Delicias de Concepción | Morazán Sur", tel: "2654-7000", desc: "Refugio ante desastres naturales.",imagen:"img/Morazan/CasaComunalDeliciasDeConcepción.jpeg" },
                { nombre: "CENTRO DESARROLLO DE LA MUJER", dirc: "El Divisadero | Morazán Sur", tel: "2654-7000", desc: "Alojamiento seguro y atención básica.",imagen:"img/Morazan/CentroDeDesarrolloDeLaMujer.jpeg" },
                { nombre: "CASA COMUNAL GUALOCOCTI", dirc: "Gualococti | Morazán Norte", tel: "2654-7000", desc: "Espacios seguros para descanso.",imagen:"img/Morazan/CasaComunalDeGualococti.jpeg" },
                { nombre: "S.U.M. JOATECA", dirc: "Joateca | Morazán Norte", tel: "2654-7000", desc: "Espacio amplio con áreas de descanso.",imagen:"img/Morazan/SalondDeUsosMultiplesJoateca.jpeg" },
                { nombre: "CASA DE LA JUVENTUD", dirc: "Perquín | Morazán Norte", tel: "2654-7000", desc: "Para personas evacuadas y apoyo.",imagen:"img/Morazan/CasaDeJuventud.jpeg" },
                { nombre: "CENTRO SOCIAL MUNICIPAL", dirc: "S.F. Gotera | Morazán Sur", tel: "2654-7000", desc: "Organización de ayuda y protección.",imagen:"img/Morazan/CentroSocialMunicipalDeYamabal.jpeg" },
                { nombre: "S.U.M. SOCIEDAD", dirc: "Sociedad | Morazán Sur", tel: "2654-7000", desc: "Refugio temporal adaptable.",imagen:"img/Morazan/SalonDeUsosMultiplesDeSociedad.jpeg" },
                { nombre: "CENTRO SOCIAL YAMABAL", dirc: "Yamabal | Morazán Sur", tel: "2654-7000", desc: "Protección durante emergencias.",imagen:"img/Morazan/CentroSocialMunicipalDeYamabal.jpeg" }
            ],
            sanmiguel: [
                { nombre: "CASA COMUNAL CHAPELTIQUE", dirc: "Chapeltique | San Miguel Norte", tel: "2660-7000", desc: "Alojamiento básico ante emergencias.",imagen:"img/SanMiguel/CasaComunalCuidadBarrios.jpeg" },
                { nombre: "C.E. DAVID J. GUZMÁN", dirc: "Chinameca | San Miguel Oeste", tel: "2660-7000", desc: "Organización de refugio masivo.",imagen:"img/SanMiguel/CasaComunalDeSesori.jpeg" },
                { nombre: "CASA DE LA CULTURA", dirc: "Ciudad Barrios | San Miguel Norte", tel: "2660-7000", desc: "Apoyo y distribución de ayuda.",imagen:"img/SanMiguel/CentroDeConvencionesHectorManuelPortillo.jpeg" },
                { nombre: "ALCALDÍA EL TRÁNSITO", dirc: "El Tránsito | San Miguel Oeste", tel: "2660-7000", desc: "Estructura segura para emergencias.",imagen:"img/SanMiguel/CentroDeFormaciónSanOscarAlnulfoRomero.jpeg" },
                { nombre: "CASA COMUNAL LOLOTIQUE", dirc: "Lolotique | San Miguel Norte", tel: "2660-7000", desc: "Descanso y atención inmediata.",imagen:"img/SanMiguel/CasaComunalDeQuelepa.jpeg" }
            ],
            sansalvador: [
                { nombre: "CENTRO FORMACIÓN MUJER", dirc: "Aguilares | S.S. Norte", tel: "2284-8400", desc: "Alojamiento y atención humanitaria.", imagen:"img/SanSalvador/CentroFormacionMujer.jpg" },
                { nombre: "CASA JUVENTUD GUAZAPA", dirc: "Guazapa | S.S. Norte", tel: "2284-8400", desc: "Protección contra tormentas.", imagen:"img/SanSalvador/CasaDeLaJuventudGuazapa.jpeg"  },
                { nombre: "CASA COMUNAL SAN BARTOLO", dirc: "Ilopango | S.S. Este", tel: "2295-7000", desc: "Descanso para familias evacuadas.", imagen:"img/SanSalvador/CasaComunalNovenaEtapaSanBartolo.jpeg"  },
                { nombre: "IGLESIA PAN DE VIDA", dirc: "Panchimalco | S.S. Sur", tel: "2284-8400", desc: "Refugio y alimentación.", imagen:"img/SanSalvador/IglesiaPanDeVida.jpeg"  },
                { nombre: "CASA COMUNAL PANCHIMALCO", dirc: "Panchimalco | S.S. Sur", tel: "2284-8400", desc: "Para zonas vulnerables.", imagen:"img/SanSalvador/CasaComunalDePanchimalco.jpeg"  },
                { nombre: "COMUDES PANCHIMALCO", dirc: "Panchimalco | S.S. Sur", tel: "2284-8400", desc: "Refugio y distribución de ayuda.", imagen:"img/SanSalvador/ComudesPanchimalco.jpeg"  },
                { nombre: "CASA COMUNAL ROSARIO DE MORA", dirc: "Rosario de Mora | S.S. Sur", tel: "2284-8400", desc: "Para familias afectadas.", imagen:"img/SanSalvador/CasaComunalRosarioDeMora.jpeg"  },
                { nombre: "POLIDEPORTIVO SAN MARCOS", dirc: "San Marcos | S.S. Sur", tel: "2280-9600", desc: "Gran capacidad para descanso masivo.", imagen:"img/SanSalvador/PolideportivoJardinesDeSanMarcos.jpeg"  },
                { nombre: "IGLESIA MONTE DE ISRAEL", dirc: "San Marcos | S.S. Sur", tel: "2280-9600", desc: "Protección básica y segura.", imagen:"img/SanSalvador/IglesiaMonteIsrael.jpeg"  },
                { nombre: "VILLA JUVENTUD EX IRA", dirc: "San Martín | S.S. Este", tel: "2284-8400", desc: "Atención básica a afectados.", imagen:"img/SanSalvador/VillaDeLaJuventudExIra.jpeg"  },
                { nombre: "PARQUE EL RECREO", dirc: "San Martín | S.S. Este", tel: "2284-8400", desc: "Áreas techadas para evacuación.", imagen:"img/SanSalvador/ParqueRecreativoVenecia.jpeg"  },
                { nombre: "CASA COMUNAL LA MASCOTA", dirc: "San Salvador | Centro", tel: "2511-6000", desc: "Protección ante inundaciones urbanas.", imagen:"img/SanSalvador/CasComunalComunidadLaMascota.jpeg"  },
                { nombre: "CASA COMUNAL NUEVA ISRAEL", dirc: "San Salvador | Centro", tel: "2511-6000", desc: "Atención en zonas vulnerables.", imagen:"img/SanSalvador/CasaComunalDiesDeOctubreNuevaIsrael.jpeg"  },
                { nombre: "C. CONVIVENCIA SIERRA MORENA", dirc: "Soyapango | S.S. Este", tel: "2292-7500", desc: "Espacio amplio para ayuda.", imagen:"img/SanSalvador/CentroDeConvienciaSierraMorena.jpeg"  },
                { nombre: "C. MUNICIPAL CIUDAD CREDISA", dirc: "Soyapango | S.S. Este", tel: "2292-7500", desc: "Asistencia comunitaria.", imagen:"img/SanSalvador/CentroMunicipalDeConvivenciaCuidadCredispa.jpeg"  },
                { nombre: "CASA COMUNAL COL. GUADALUPE", dirc: "Soyapango | S.S. Este", tel: "2292-7500", desc: "Refugio masivo disponible.", imagen:"img/SanSalvador/CasaComunalColoniaGuadalupe.jpeg"  },
                { nombre: "PARQUE VENECIA", dirc: "Soyapango | S.S. Este", tel: "2292-7500", desc: "Protección a evacuados.", imagen:"img/SanSalvador/ParqueRecreativoVenecia.jpeg"  },
                { nombre: "C. COMUNITARIO MSOR. ROMERO", dirc: "Tonacatepeque | S.S. Este", tel: "2284-8400", desc: "Apoyo social y refugio.", imagen:"img/SanSalvador/CentroComunitarioMonseñorRomero.jpeg"  },
                { nombre: "EXCLÍNICA DISTRITA ITALIA", dirc: "Tonacatepeque | S.S. Este", tel: "2284-8400", desc: "Estructura segura para protección.", imagen:"img/SanSalvador/ExclinicsComunalDistritoItalia.jpeg"  }
            ],
            sanvicente: [
                { nombre: "CASA COMUNAL APASTEPEQUE", dirc: "Apastepeque | S.V. Norte", tel: "2393-7000", desc: "Protección, descanso y atención básica.", imagen:"img/SanVicente/CasaComunalDeApastepeque.jpeg" },
                { nombre: "C.E. GUADALUPE", dirc: "Guadalupe | S.V. Sur", tel: "2393-7000", desc: "Aulas amplias y áreas techadas.", imagen:"img/SanVicente/CasaDeLaMujerDeGuadalupe.jpeg" },
                { nombre: "CASA COMUNAL SAN CAYETANO", dirc: "San Cayetano Istepeque | S.V. Norte", tel: "2393-7000", desc: "Punto de reunión y protección.", imagen:"img/SanVicente/CasaComunalDeSanCayetanoIstepeque.jpeg" },
                { nombre: "CASA COMUNAL SAN ESTEBAN", dirc: "San Esteban Catarina | S.V. Norte", tel: "2393-7000", desc: "Protección y ayuda humanitaria.", imagen:"img/SanVicente/CasaDeencuentrojuvenil.jpeg" },
                { nombre: "C.E. SAN ILDEFONSO", dirc: "San Ildefonso | S.V. Norte", tel: "2393-7000", desc: "Seguridad para familias afectadas.", imagen:"img/SanVicente/CasaComunalDeSantaClara.jpeg" },
                { nombre: "CASA COMUNAL VERAPAZ", dirc: "Verapaz | S.V. Sur", tel: "2393-7000", desc: "Protección y asistencia inmediata.", imagen:"img/SanVicente/Casacomunalverapaz.jpeg" },
                { nombre: "CASA COMUNAL SAN SEBASTIÁN", dirc: "San Sebastián | S.V. Norte", tel: "2393-7000", desc: "Apoyo inmediato a evacuados.", imagen:"img/SanVicente/CasaComunalDeSantoDomingo.jpeg" },
                { nombre: "INSTITUTO NACIONAL SAN VICENTE", dirc: "San Vicente | S.V. Sur", tel: "2393-7000", desc: "Refugio de gran capacidad.", imagen:"img/SanVicente//CasaComunalDeCañaverales.jpeg" },
                { nombre: "CASA COMUNAL TECOLUCA", dirc: "Tecoluca | S.V. Sur", tel: "2393-7000", desc: "Áreas de descanso y apoyo.", imagen:"img/SanVicente/MegaAlbergueDeTecoluca.jpeg" }
            ],
            santaana: [
                { nombre: "CASA COMUNAL CANDELARIA", dirc: "Candelaria Frontera | S.A. Oeste", tel: "2484-7500", desc: "Protección y alojamiento básico.", imagen:"img/SantaAna/CasaComunalCandelaria.jpg" },
                { nombre: "C.E. CHALCHUAPA", dirc: "Chalchuapa | S.A. Oeste", tel: "2484-7500", desc: "Instalaciones amplias techadas.", imagen:"img/SantaAna/CEChalchuapa.jpg"  },
                { nombre: "CASA COMUNAL COATEPEQUE", dirc: "Coatepeque | S.A. Este", tel: "2484-7500", desc: "Descanso y atención inmediata.", imagen:"img/SantaAna/CasaComunalCoatepeque.jpg" },
                { nombre: "C.E. EL CONGO", dirc: "El Congo | S.A. Este", tel: "2484-7500", desc: "Aulas amplias para refugio.", imagen:"img/SantaAna/CasaComunalMetapan.webp" },
                { nombre: "CASA COMUNAL MASAHUAT", dirc: "Masahuat | S.A. Oeste", tel: "2484-7500", desc: "Áreas de descanso para afectados.", imagen:"img/SantaAna/CasaComunalDeMasahuat.JPG" },
                { nombre: "INSTITUTO NACIONAL METAPÁN", dirc: "Metapán | S.A. Norte", tel: "2484-7500", desc: "Alimentación y atención humanitaria.", imagen:"img/SantaAna/InstitutoNacionalSantaAna.jpg" },
                { nombre: "CASA COMUNAL S.A. PAJONAL", dirc: "S.A. Pajonal | S.A. Norte", tel: "2484-7500", desc: "Protección y asistencia inmediata.", imagen:"img/SantaAna/CasaComunalSAPajonal.jpg" },
                { nombre: "CASA COMUNAL S.S. SALITRILLO", dirc: "S.S. Salitrillo | S.A. Oeste", tel: "2484-7500", desc: "Apoyo comunitario organizado.", imagen:"img/SantaAna/CentroComunitarioDeSanEstebanSalitrillo.webp" },
                { nombre: "INSTITUTO NACIONAL SANTA ANA", dirc: "Santa Ana | Centro", tel: "2441-0000", desc: "Refugio principal de gran capacidad.", imagen:"img/SantaAna/InstitutoNacionalSantaAna.jpg" }
            ],
            sonsonate: [
                { nombre: "CASA COMUNAL ACAJUTLA", dirc: "Acajutla | Sonsonate Oeste", tel: "2429-7300", desc: "Protección y alojamiento básico.", imagen:"img/Sonsonate/CasaComunalAcajutla.jpg"},
                { nombre: "CASA COMUNAL ARMENIA", dirc: "Armenia | Sonsonate Este", tel: "2429-7300", desc: "Descanso y protección.", imagen:"img/Sonsonate/CasaComunalArmenia.jpg" },
                { nombre: "C.E. IZALCO", dirc: "Izalco | Sonsonate Este", tel: "2429-7300", desc: "Instalaciones amplias y techadas.", imagen:"img/Sonsonate/CEIzalco.jpg" },
                { nombre: "CASA CULTURA JUAYÚA", dirc: "Juayúa | Sonsonate Norte", tel: "2429-7300", desc: "Espacios amplios y seguros.", imagen:"img/Sonsonate/CasaCulturaJuayua.jpg" },
                { nombre: "CASA COMUNAL NAHUIZALCO", dirc: "Nahuizalco | Sonsonate Norte", tel: "2429-7300", desc: "Alojamiento temporal adecuado.", imagen:"img/Sonsonate/CasaComunalNahuizalco.jpg" },
                { nombre: "CASA COMUNAL SALCOATITÁN", dirc: "Salcoatitán | Sonsonate Norte", tel: "2429-7300", desc: "Se coordina ayuda humanitaria.", imagen:"img/Sonsonate/CasaComunalSaalcotitan.jpg" },
                { nombre: "INSTITUTO NACIONAL SONSONATE", dirc: "Sonsonate | Centro", tel: "2451-0000", desc: "Refugio principal con gran capacidad.", imagen:"img/Sonsonate/InstitutoNacionalSonsonate.jpg" },
                { nombre: "CASA COMUNAL SONZACATE", dirc: "Sonzacate | Sonsonate Este", tel: "2429-7300", desc: "Apoyo ante desastres naturales.", imagen:"img/Sonsonate/CasaComunalSonzacate.jpg" },
                { nombre: "CASA COMUNAL CALUCO", dirc: "Caluco | Sonsonate Este", tel: "2429-7300", desc: "Adaptado como refugio temporal.", imagen:"img/Sonsonate/CasaComunalCaluco.jpg" },
                { nombre: "CASA COMUNAL CUISNAHUAT", dirc: "Cuisnahuat | Sonsonate Este", tel: "2429-7300", desc: "Protección ante inundaciones.", imagen:"img/Sonsonate/CasaComunalCuisnahuat.jpg" },
                { nombre: "CASA COMUNAL S.A. DEL MONTE", dirc: "S.A. del Monte | Centro", tel: "2429-7300", desc: "Organización de ayuda.", imagen:"img/Sonsonate/CasaComunalSADelMonte.jpg" },
                { nombre: "CASA COMUNAL S.C. MASAHUAT", dirc: "S.C. Masahuat | Norte", tel: "2429-7300", desc: "Asistencia humanitaria disponible.", imagen:"img/Sonsonate/CasaComunalSCMasahuat.jpg" },
                { nombre: "CASA COMUNAL S.I. ISHUATÁN", dirc: "S.I. Ishuatán | Oeste", tel: "2429-7300", desc: "Seguridad básica y descanso.", imagen:"img/Sonsonate/CasaComunalSIIshuat.jpg" },
                { nombre: "CASA COMUNAL S.D. GUZMÁN", dirc: "S.D. Guzmán | Norte", tel: "2429-7300", desc: "Atención inmediata a evacuados.", imagen:"img/Sonsonate/CasaComunalSDGusman.jpg" }
            ],
            usulutan: [
                { nombre: "CASA COMUNAL ALEGRÍA", dirc: "Alegría | Usulután Norte", tel: "2624-7000", desc: "Protección y alojamiento básico.", imagen:"img/Usulutan/150 CASA COMUNAL DE ALEGRIA.jpg.webp" },
                { nombre: "C.E. BERLÍN", dirc: "Berlín | Usulután Norte", tel: "2624-7000", desc: "Atención comunitaria organizada.", imagen:"img/Usulutan/CEBerlín.jpg" },
                { nombre: "CASA COMUNAL JIQUILISCO", dirc: "Jiquilisco | Usulután Oeste", tel: "2624-7000", desc: "Para familias de zonas vulnerables.", imagen:"img/Usulutan/CasaComunalJiquilisco.jpg" },
                { nombre: "C.E. PUERTO EL TRIUNFO", dirc: "Pto. El Triunfo | Oeste", tel: "2624-7000", desc: "Aulas para emergencias costeras.", imagen:"img/Usulutan/CEPuertoElTriunfo.jpg" },
                { nombre: "CASA COMUNAL SANTIAGO MARÍA", dirc: "Santiago María | Norte", tel: "2624-7000", desc: "Protección por fenómenos naturales.", imagen:"img/Usulutan/CasaComunalSantiagoDeMaría.jpg" },
                { nombre: "CASA COMUNAL TECAPÁN", dirc: "Tecapán | Usulután Norte", tel: "2624-7000", desc: "Asistencia inmediata a evacuados.", imagen:"img/Usulutan/CasaComunalTecapán.jpg" },
                { nombre: "INSTITUTO NACIONAL USULUTÁN", dirc: "Usulután | Este", tel: "2662-0000", desc: "Refugio principal del departamento.", imagen:"img/Usulutan/InstitutoNacionalDeUsulután.jpg" },
                { nombre: "CASA COMUNAL JUCUAPA", dirc: "Jucuapa | Usulután Norte", tel: "2624-7000", desc: "Organización de ayuda humanitaria.", imagen:"img/Usulutan/CasaComunalDeJucuapa.jpg" }
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