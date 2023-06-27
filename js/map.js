let localidade = 
["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7247.5708263611!2d-51.713043057588635!3d-20.792491392739606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490984537ec7625%3A0xb0afdee605d437!2sR.%20Treze%20de%20Junho%2C%20255%20-%20Santos%20Dumont%2C%20Tr%C3%AAs%20Lagoas%20-%20MS%2C%2079620-175!5e0!3m2!1spt-BR!2sbr!4v1687780785728!5m2!1spt-BR!2sbr", // 1 - Serviços Ambulatoriais Especializados
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7247.688768348913!2d-51.71602415211238!3d-20.790035745179818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949098506d2e0f9d%3A0x8653e678c94bf3b9!2sAv.%20Dr.%20Clodoaldo%20Garc%C3%ADa%2C%20440%20-%20Santos%20Dumont%2C%20Tr%C3%AAs%20Lagoas%20-%20MS%2C%2079630-000!5e0!3m2!1spt-BR!2sbr!4v1687780645519!5m2!1spt-BR!2sbr", // 2 - Centro Odontológico
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7459.972527990524!2d-51.7172828!3d-20.7918436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949098507f5c722d%3A0xe426904f4c3668df!2sCEM%20-%20Centro%20De%20Especialidades%20M%C3%A9dicas!5e0!3m2!1spt-BR!2sbr!4v1687792305028!5m2!1spt-BR!2sbr", // 3 - CEM - Centro De Especialidades Médicas
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7459.949020181748!2d-51.707049!3d-20.7923191!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ3JzI4LjAiUyA1McKwNDInNTUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1687825644870!5m2!1spt-BR!2sbr", // 4 - Samu
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14920.000188022883!2d-51.7066627!3d-20.791286!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ3JzM4LjYiUyA1McKwNDMnMjEuMSJX!5e0!3m2!1spt-BR!2sbr!4v1687825756313!5m2!1spt-BR!2sbr", // 5 - Banda Cristo Redentor
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14920.26659350291!2d-51.7325265!3d-20.7885914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94909856073db99b%3A0xfdc86bde2e58c0a3!2sR.%20Abrao%20Mattar%2C%20161%20-%20Vila%20Clementina%2C%20Tr%C3%AAs%20Lagoas%20-%20MS%2C%2079640-190!5e0!3m2!1spt-BR!2sbr!4v1687792384175!5m2!1spt-BR!2sbr", // 6 - Almoxarifado
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14920.5274107144!2d-51.7325872!3d-20.785953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949099df0afe17a7%3A0x7d9cd5349327fecb!2sUSF%20Eur%C3%ADdice%20Chagas%20(Santa%20Luzia)!5e0!3m2!1spt-BR!2sbr!4v1687792409750!5m2!1spt-BR!2sbr", // 7 - USF Eurídice Chagas (Santa Luzia)
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59679.46251262989!2d-51.7552868!3d-20.7926469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490996d25b40431%3A0xdb026713fab42c09!2sUSF%20Pastor%20Marcos%20(Novo%20Oeste)!5e0!3m2!1spt-BR!2sbr!4v1687792430364!5m2!1spt-BR!2sbr", // 8 - USF Pastor Marcos (Novo Oeste)
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14919.607420503584!2d-51.7486451!3d-20.7952581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949099a456c09dc5%3A0x6a14aaefab3bd1d0!2sCentro%20de%20Refer%C3%AAncia%20de%20Assist%C3%AAncia%20Social%20-%20CRAS%20Ana%20Maria%20Moreira!5e0!3m2!1spt-BR!2sbr!4v1687792452930!5m2!1spt-BR!2sbr", // 9 - Centro de Referência de Assistência Social - CRAS Ana Maria Moreira
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29838.54425113266!2d-51.7461674!3d-20.7986484!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949099ae96fcc453%3A0x338539ea5d623fa8!2sUSF%20Jardim%20Maristela!5e0!3m2!1spt-BR!2sbr!4v1687792476996!5m2!1spt-BR!2sbr", // 10 - USF Jardim Maristela
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29837.381157157695!2d-51.7424942!3d-20.8045274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949099c90e8d0ddb%3A0xf75bddb3fe612f1a!2sUSF%20Erothide%20Gon%C3%A7alves%20(Vila%20Haro)!5e0!3m2!1spt-BR!2sbr!4v1687792501663!5m2!1spt-BR!2sbr", // 11 - USF Erothide Gonçalves (Vila Haro)
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3729.555908684183!2d-51.7203921!3d-20.8092467!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ4JzI4LjMiUyA1McKwNDMnMzAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1687825854315!5m2!1spt-BR!2sbr", // 12 - Crase - Coração de Mãe
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29837.278206527957!2d-51.731252!3d-20.8050477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949099be566de5e5%3A0x1813ec5601b46a2c!2sS.C.F.V%20Tia%20Nega!5e0!3m2!1spt-BR!2sbr!4v1687792543178!5m2!1spt-BR!2sbr", // 13 - CAPS AD
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14918.508564343938!2d-51.7257255!3d-20.8063671!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94909830943789fb%3A0xfefb395af324bcf4!2sUSF%20Joel%20Neves%20(S%C3%A3o%20Carlos)!5e0!3m2!1spt-BR!2sbr!4v1687792567705!5m2!1spt-BR!2sbr", // 14 - S.C.F.V Tia Nega
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14918.508564343938!2d-51.7257255!3d-20.8063671!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949099fd8587bb2b%3A0x99555be8b5f65bb0!2sCAPS%20AD!5e0!3m2!1spt-BR!2sbr!4v1687792586953!5m2!1spt-BR!2sbr", // 15 - USF Joel Neves (São Carlos)
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14918.508564343938!2d-51.7257255!3d-20.8063671!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949099fd8587bb2b%3A0x99555be8b5f65bb0!2sCAPS%20AD!5e0!3m2!1spt-BR!2sbr!4v1687792586953!5m2!1spt-BR!2sbr", // 16 - Clinica Do Idoso e Reabilitação
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14918.879007507392!2d-51.7128401!3d-20.8026227!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ3JzMzLjIiUyA1McKwNDInMjIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1687825940426!5m2!1spt-BR!2sbr", // 17 - Conselho Municipal de Saúde
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3730.1019255183023!2d-51.707126!3d-20.787164!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ3JzEzLjgiUyA1McKwNDInMjUuNyJX!5e0!3m2!1spt-BR!2sbr!4v1687826017537!5m2!1spt-BR!2sbr", // 18 - Habitação
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3730.1019255183023!2d-51.707126!3d-20.787164!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ3JzEzLjAiUyA1McKwNDInMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1687826113425!5m2!1spt-BR!2sbr", // 19 - Arquivo RH
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3730.1019255183023!2d-51.707126!3d-20.787164!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ3JzA2LjAiUyA1McKwNDInMjQuOCJX!5e0!3m2!1spt-BR!2sbr!4v1687826161998!5m2!1spt-BR!2sbr", // 20 - Junta Militar
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7460.183091534341!2d-51.710222!3d-20.787584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490985ef9b7a749%3A0x47531153ff5a5f33!2sConselho%20Tutelar!5e0!3m2!1spt-BR!2sbr!4v1687792876505!5m2!1spt-BR!2sbr", // 21 - Conselho Tutelar
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7460.32317085806!2d-51.7101369!3d-20.7847498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490985f42c1ab0b%3A0x6c95e56c2ae95ff1!2sAmbulatorio%20De%20Sa%C3%BAde%20Mental-asm!5e0!3m2!1spt-BR!2sbr!4v1687792899527!5m2!1spt-BR!2sbr", // 22 - Ambulatório De Saúde Mental-asm
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3730.2288363636458!2d-51.707798!3d-20.7820281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490985f7ae89b1d%3A0xb9d76caaf5b5518b!2sPrefeitura%20Municipal%20De%20Tres%20Lagoas%20-%20Setor%20De%20Protocolo!5e0!3m2!1spt-BR!2sbr!4v1687826233464!5m2!1spt-BR!2sbr", // 23 - Prefeitura Municipal De Três Lagoas - Setor De Protocolo
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7460.519099053167!2d-51.7109714!3d-20.780785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949099d7253a05fb%3A0x74cf4a77606f37b1!2sLaboratorio%20Municipal%20Jaime%20Joaquim%20De%20Carvalho!5e0!3m2!1spt-BR!2sbr!4v1687792965075!5m2!1spt-BR!2sbr", // 24 - Laboratório Municipal Jaime Joaquim De Carvalho
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7460.541917462924!2d-51.7102561!3d-20.7803232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490985fefb0fcc5%3A0xb65df7377ecadd13!2sCentro%20de%20Refer%C3%AAncia%20de%20Assist%C3%AAncia%20Social%20-%20CRAS%20Interlagos!5e0!3m2!1spt-BR!2sbr!4v1687792991317!5m2!1spt-BR!2sbr", // 25 - CRAS Interlagos
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3730.372123909938!2d-51.710993!3d-20.776228!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ2JzM0LjQiUyA1McKwNDInMzkuNiJX!5e0!3m2!1spt-BR!2sbr!4v1687826323436!5m2!1spt-BR!2sbr", // 26 - Consultório de Rua 
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3730.3888314253536!2d-51.7126188!3d-20.7755516!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94909954a23fb3c7%3A0xeeff3869ece6c51c!2sConselho%20Municipal%20De%20Sa%C3%BAde!5e0!3m2!1spt-BR!2sbr!4v1687793038515!5m2!1spt-BR!2sbr", // 27 - USF Gabriel Marques (Interlagos)
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29843.34097020636!2d-51.7228964!3d-20.774386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490988b75db480f%3A0xcc83e8555e3c206f!2sUSF%20Santo%20Andr%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1687793058575!5m2!1spt-BR!2sbr", // 28 - USF Santo André
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3730.3514240494537!2d-51.698041!3d-20.777066!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ2JzM3LjQiUyA1McKwNDEnNTMuMCJX!5e0!3m2!1spt-BR!2sbr!4v1687826430304!5m2!1spt-BR!2sbr", // 29 - CRAU
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14921.667728700279!2d-51.7071407!3d-20.7744139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490992e429b67c7%3A0x20723d143ad77b53!2sVigil%C3%A2ncia%20Sanit%C3%A1ria%20de%20Tr%C3%AAs%20Lagoas!5e0!3m2!1spt-BR!2sbr!4v1687793100297!5m2!1spt-BR!2sbr", // 30 - Vigilância Sanitária de Três Lagoas
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3730.448679287958!2d-51.6926026!3d-20.7731285!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ2JzIxLjUiUyA1McKwNDEnNDguMSJX!5e0!3m2!1spt-BR!2sbr!4v1687826521808!5m2!1spt-BR!2sbr", // 31 - Acolhimento 1
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14922.41808059447!2d-51.6957313!3d-20.7668176!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949098848deeafc5%3A0x7d83c1827f6c6956!2sUSF%20Maria%20Luiza%20(Paranapung%C3%A1)!5e0!3m2!1spt-BR!2sbr!4v1687793141142!5m2!1spt-BR!2sbr", // 32 - USF Maria Luiza (Paranapungá)
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29842.01010400878!2d-51.7047127!3d-20.7811204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949098641cf8a557%3A0xbd349ffd3b76669f!2sR.%20Bom%20Jesus%20da%20Lapa%2C%201057%20-%20Jardim%20Dourados%2C%20Tr%C3%AAs%20Lagoas%20-%20MS%2C%2079602-110!5e0!3m2!1spt-BR!2sbr!4v1687793163062!5m2!1spt-BR!2sbr", // 33 - Endemias
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29842.01010400878!2d-51.7047127!3d-20.7811204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949098665b5c69ed%3A0x3e20a2cbc5175ae2!2sF%C3%B3rum%20da%20Comarca%20de%20Tr%C3%AAs%20Lagoas%20-%20MS!5e0!3m2!1spt-BR!2sbr!4v1687793198854!5m2!1spt-BR!2sbr", // 34 - Fórum da Camarca de Três Lagoas
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3730.096735667791!2d-51.702131!3d-20.787374!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ3JzE0LjYiUyA1McKwNDInMDcuNyJX!5e0!3m2!1spt-BR!2sbr!4v1687826583556!5m2!1spt-BR!2sbr", // 35 - Vigilância Ambiental
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29840.93088362624!2d-51.7162296!3d-20.7865799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94909870256bf151%3A0xdb2a8ff108acc42c!2sHemon%C3%BAcleo%20de%20Tr%C3%AAs%20Lagoas!5e0!3m2!1spt-BR!2sbr!4v1687793236108!5m2!1spt-BR!2sbr", // 36 - Hemonúcleo de Três Lagoas
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7459.976552199027!2d-51.6933629!3d-20.7917622!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ3JzM3LjciUyA1McKwNDEnNDAuNyJX!5e0!3m2!1spt-BR!2sbr!4v1687826650657!5m2!1spt-BR!2sbr", // 37 - Ortopedia e Fisioterapia
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29840.021356750254!2d-51.7019551!3d-20.7911799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949099bf3f084e9b%3A0x65aae5fcf227d0a5!2sUSF%20Santa%20Rita!5e0!3m2!1spt-BR!2sbr!4v1687793274037!5m2!1spt-BR!2sbr", // 38 - USF Santa Rita
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29838.821713119643!2d-51.7107685!3d-20.7972457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949099bdae945463%3A0x2d0a9c9d96cee52c!2sUSF%20Nova%20Tr%C3%AAs%20Lagoas!5e0!3m2!1spt-BR!2sbr!4v1687793297783!5m2!1spt-BR!2sbr", // 39 - USF Nova Três Lagoas
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3729.6035208560465!2d-51.696198!3d-20.807322!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ4JzI2LjQiUyA1McKwNDEnNDYuMyJX!5e0!3m2!1spt-BR!2sbr!4v1687826690579!5m2!1spt-BR!2sbr", // 40 - CAPS 2
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29841.10076587976!2d-51.7097412!3d-20.7857206!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490987aa11a321b%3A0x71d0fc25fbb77a12!2sUSF%20Miguel%20Nunes%20(Vila%20Nova)!5e0!3m2!1spt-BR!2sbr!4v1687793336838!5m2!1spt-BR!2sbr", // 41 - USF Miguel Nunes (Vila Nova)
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29841.10076587976!2d-51.7097412!3d-20.7857206!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94909864a4c7c8db%3A0x44b9f23f43d7f8b8!2zQ2zDrW5pY2EgRGEgQ3JpYW7Dp2E!5e0!3m2!1spt-BR!2sbr!4v1687793360789!5m2!1spt-BR!2sbr", // 42 - Clínica Da Criança
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3730.1212758049082!2d-51.687175!3d-20.786381!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ3JzExLjAiUyA1McKwNDEnMTMuOCJX!5e0!3m2!1spt-BR!2sbr!4v1687826746980!5m2!1spt-BR!2sbr", // 43 - Acolhimento 2
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29842.75845078527!2d-51.6856974!3d-20.7773339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490a281473cf7b1%3A0xc1ebfbc2d397933f!2sESF%20-%20Jardim%20Atenas!5e0!3m2!1spt-BR!2sbr!4v1687793395273!5m2!1spt-BR!2sbr", // 44 - ESF - Jardim Atenas
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14921.177388363723!2d-51.6785984!3d-20.7793765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490a2a2a13e40d9%3A0xd3e62db91189ab2e!2sUSF%20Vila%20Alegre!5e0!3m2!1spt-BR!2sbr!4v1687793413262!5m2!1spt-BR!2sbr", // 45 - USF Vila Alegre
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3730.058180923856!2d-51.667334!3d-20.788934!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ3JzIwLjIiUyA1McKwNDAnMDIuNCJX!5e0!3m2!1spt-BR!2sbr!4v1687826793476!5m2!1spt-BR!2sbr", // 46 - Clube Militar
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14920.678445632617!2d-51.668759!3d-20.784425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490a2eaa4e8199f%3A0x984ebf1a15c94cab!2sVacina%C3%A7%C3%A3o%20COVID-19%20-%20USF%20Vila%20Piloto!5e0!3m2!1spt-BR!2sbr!4v1687793452690!5m2!1spt-BR!2sbr", // 47 - USF Vila Piloto
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7459.993390431488!2d-51.6570407!3d-20.7914216!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ3JzE2LjQiUyA1McKwMzknMzQuMyJX!5e0!3m2!1spt-BR!2sbr!4v1687826852333!5m2!1spt-BR!2sbr", // 48 - CRAS Vila Piloto
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14920.47045356127!2d-51.6633895!3d-20.7865292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490a2ecd1d3db29%3A0x738531de2006af0f!2sArena%20Mix!5e0!3m2!1spt-BR!2sbr!4v1687793505396!5m2!1spt-BR!2sbr", // 49 - Arena Mix (Departamento de Turismo)
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3729.8387616925984!2d-51.655314!3d-20.79781!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ3JzUyLjEiUyA1McKwMzknMTkuMSJX!5e0!3m2!1spt-BR!2sbr!4v1687826901006!5m2!1spt-BR!2sbr", // 50 - Centro de Entomologia
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7459.812788371037!2d-51.6575955!3d-20.7950745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490a2a324fb04cb%3A0xf3e9cb238d4ffd4b!2sCentro%20De%20Zoonoses!5e0!3m2!1spt-BR!2sbr!4v1687793545736!5m2!1spt-BR!2sbr", // 51 - Centro de Zoonoses
"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14919.844042820752!2d-51.6353676!3d-20.7928652!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ3JzM4LjciUyA1McKwMzgnMjAuNCJX!5e0!3m2!1spt-BR!2sbr!4v1687826958739!5m2!1spt-BR!2sbr"]; // 52 - ESF Jupia


 const botaoHome = document.getElementById("botaoHome");
 

 botaoHome.addEventListener('click', botaoHome => {
	const leituraUnidade = document.getElementById("leituraUnidade").value;
	console.log(leituraUnidade);
 	mapa.style.display = "flex";

	if (leituraUnidade == "1" || leituraUnidade == "Serviços Ambulatoriais Especializados"){
		document.getElementById("tituloMapa").innerHTML = "Serviços Ambulatoriais Especializados";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[0];
		mapa.style.display = "flex";
	} else if (leituraUnidade == "2" || leituraUnidade == "Centro Odontológico"){
		document.getElementById("tituloMapa").innerHTML = "Centro Odontológico";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[1];
		mapa.style.display = "flex";
	} else if (leituraUnidade == "3" || leituraUnidade == "CEM"){
		document.getElementById("tituloMapa").innerHTML = "CEM";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[2];
		mapa.style.display = "flex";
	} else if (leituraUnidade == "4" || leituraUnidade == "Samu"){
		document.getElementById("tituloMapa").innerHTML = "Samu";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[3];
		mapa.style.display = "flex";
	} else if (leituraUnidade == "5" || leituraUnidade == "Banda Cristo Redentor" || leituraUnidade == "Banda"){
		document.getElementById("tituloMapa").innerHTML = "Banda Cristo Redentor";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[4];
		mapa.style.display = "flex";
	} else if (leituraUnidade == "6" || leituraUnidade == "Almoxarifado"){
		document.getElementById("tituloMapa").innerHTML = "Almoxarifado";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[5];
		mapa.style.display = "flex";
	} else if (leituraUnidade == "7" || leituraUnidade == "USF Eurídice Chagas" || leituraUnidade == "Santa luzia" || leituraUnidade == "Santa Luzia"){
		document.getElementById("tituloMapa").innerHTML = "USF Eurídice Chagas";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[6];
		mapa.style.display = "flex";
	} else if (leituraUnidade == "8" || leituraUnidade == "USF Pastor Marcos" || leituraUnidade == "Novo Oeste" || leituraUnidade == "Novo oeste"){
		document.getElementById("tituloMapa").innerHTML = "USF Pastor Marcos";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[7];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "9" || leituraUnidade == "Centro de Referência de Assistência Social" || leituraUnidade == "CRAS Ana Maria Moreira"){
		document.getElementById("tituloMapa").innerHTML = "Centro de Referência de Assistência Social";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[8];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "10" || leituraUnidade == "USF Jardim Maristela" ||  leituraUnidade == "Jardim Maristela" || leituraUnidade == "Jardim maristela"){
		document.getElementById("tituloMapa").innerHTML = "USF Jardim Maristela";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[9];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "11" || leituraUnidade == "USF Erothide Gonçalves" || leituraUnidade == "Vila Haro" || leituraUnidade == "Vila haro"){
		document.getElementById("tituloMapa").innerHTML = "USF Erothide Gonçalves";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[10];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "12" || leituraUnidade == "Crase Coração de Mãe" || leituraUnidade == "Coração de Mãe" || leituraUnidade == "Coração de mãe"){
		document.getElementById("tituloMapa").innerHTML = "Crase Coração de Mãe";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[11];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "13" || leituraUnidade == "Tia Nega" || leituraUnidade == "Tia nega"){
		document.getElementById("tituloMapa").innerHTML = "Tia Nega";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[12];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "14" || leituraUnidade == "CAPS AD" || leituraUnidade == "Caps ad"){
		document.getElementById("tituloMapa").innerHTML = "CAPS AD";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[13];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "15" || leituraUnidade == "USF Joel Neves" || leituraUnidade == "São Carlos" || leituraUnidade == "São carlos"){
		document.getElementById("tituloMapa").innerHTML = "USF Joel Neves";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[14];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "16" || leituraUnidade == "Clinica Do Idoso e Reabilitação" || leituraUnidade == "Clinica do idoso"){
		document.getElementById("tituloMapa").innerHTML = "Clinica Do Idoso e Reabilitação";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[15];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "17" || leituraUnidade == "Conselho Municipal de Saúde" || leituraUnidade == "Conselho municipla de saúde"){
		document.getElementById("tituloMapa").innerHTML = "Conselho Municipal de Saúde";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[16];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "18" || leituraUnidade == "Habitação"){
		document.getElementById("tituloMapa").innerHTML = "Habitação";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[17];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "19" || leituraUnidade == "Arquivo RH"){
		document.getElementById("tituloMapa").innerHTML = "Arquivo RH";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[18];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "20" || leituraUnidade == "Junta Militar" || leituraUnidade == "Junta militar"){
		document.getElementById("tituloMapa").innerHTML = "Junta Militar";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[19];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "21" || leituraUnidade == "Conselho Tutelar" || leituraUnidade == "Conselho tutelar"){
		document.getElementById("tituloMapa").innerHTML = "Conselho Tutelar";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[20];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "22" || leituraUnidade == "Ambulatório de saúde mental"){
		document.getElementById("tituloMapa").innerHTML = "Ambulatório de saúde mental";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[21];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "23" || leituraUnidade == "Setor de protocolo"){
		document.getElementById("tituloMapa").innerHTML = "Setor de protocolo";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[22];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "24" || leituraUnidade == "Laboratório Municipal" || leituraUnidade == "Laboratório municipal"){
		document.getElementById("tituloMapa").innerHTML = "Laboratório Municipal";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[23];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "25" || leituraUnidade == "CRAS Interlagos" || leituraUnidade == "Cras interlagos"){
		document.getElementById("tituloMapa").innerHTML = "CRAS Interlagos";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[24];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "26" || leituraUnidade == "Consultório de Rua" || leituraUnidade == "Consultório de rua"){
		document.getElementById("tituloMapa").innerHTML = "Consultório de Rua";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[25];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "27" || leituraUnidade == "USF Gabriel Marques" || leituraUnidade == "Interlagos"){
		document.getElementById("tituloMapa").innerHTML = "USF Gabriel Marques";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[26];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "28" || leituraUnidade == "USF Santo André" || leituraUnidade == "Santo André" || leituraUnidade == "Santo andré" || leituraUnidade == "Santo andre"){
		document.getElementById("tituloMapa").innerHTML = "USF Santo André";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[27];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "29" || leituraUnidade == "Crau" || leituraUnidade == "CRAU"){
		document.getElementById("tituloMapa").innerHTML = "Crau";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[28];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "30" || leituraUnidade == "Vigilância sanitária de Três Lagoas" || leituraUnidade == "Vigilância Sanitária de Três Lagoas" || leituraUnidade == "Vigilância sanitária de três Lagoas"){
		document.getElementById("tituloMapa").innerHTML = "Vigilância sanitária de Três Lagoas";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[29];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "31" || leituraUnidade == "Acolhimento 1" || leituraUnidade == "Acolhimento um" || leituraUnidade == "Acolhimento Um"){
		document.getElementById("tituloMapa").innerHTML = "Acolhimento 1";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[30];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "32" || leituraUnidade == "USF Maria Luiza" || leituraUnidade == "Paranapungá"){
		document.getElementById("tituloMapa").innerHTML = "USF Maria Luiza";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[31];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "33" || leituraUnidade == "Endemias"){
		document.getElementById("tituloMapa").innerHTML = "Endemias";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[32];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "34" || leituraUnidade == "Fórum da Camarca de Três Lagoas" || leituraUnidade == "Fórum"){
		document.getElementById("tituloMapa").innerHTML = "Fórum da Camarca de Três Lagoas";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[33];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "35" || leituraUnidade == "Vigilância Ambiental" || leituraUnidade == "Vigilância ambiental"){
		document.getElementById("tituloMapa").innerHTML = "Vigilância Ambiental";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[34];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "36" || leituraUnidade == "Hemonúcleo de Três Lagoas"){
		document.getElementById("tituloMapa").innerHTML = "Hemonúcleo de Três Lagoas";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[35];
		mapa.style.display = "flex";
	} 
else if (leituraUnidade == "37" || leituraUnidade == "Ortopedia e Fisioterapia" || leituraUnidade == "Ortopedia e fisioterapia"){
	document.getElementById("tituloMapa").innerHTML = "Ortopedia e Fisioterapia";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[36];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "38" || leituraUnidade == "USF Santa Rita" || leituraUnidade == "Santa Rita" || leituraUnidade == "Santa rita"){
		document.getElementById("tituloMapa").innerHTML = "USF Santa Rita";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[37];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "39" || leituraUnidade == "USF Nova Três Lagoas" || leituraUnidade == "Nova Três Lagoas"){
		document.getElementById("tituloMapa").innerHTML = "USF Nova Três Lagoas";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[38];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "40" || leituraUnidade == "CAPS 2" || leituraUnidade == "Caps 2" || leituraUnidade == "Caps dois"){
		document.getElementById("tituloMapa").innerHTML = "CAPS 2";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[39];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "41" || leituraUnidade == "USF Miguel Nunes" || leituraUnidade == "Vila Nova"){
		document.getElementById("tituloMapa").innerHTML = "USF Miguel Nunes";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[40];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "42" || leituraUnidade == "Clínica Da Criança" || leituraUnidade == "Clínica da criança"){
		document.getElementById("tituloMapa").innerHTML = "Clínica Da Criança";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[41];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "43" || leituraUnidade == "Acolhimento 2" || leituraUnidade == "Acolhimento dois"){
		document.getElementById("tituloMapa").innerHTML = "Acolhimento 2";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[42];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "44" || leituraUnidade == "ESF - Jardim Atenas" || leituraUnidade == "Jardim Atenas" || leituraUnidade == "Atenas"){
		document.getElementById("tituloMapa").innerHTML = "ESF - Jardim Atenas";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[43];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "45" || leituraUnidade == "USF Vila Alegre" || leituraUnidade == "Vila Alegre"){
		document.getElementById("tituloMapa").innerHTML = "USF Vila Alegre";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[44];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "46" || leituraUnidade == "Clube Militar" || leituraUnidade == "Clube militar"){
		document.getElementById("tituloMapa").innerHTML = "Clube Militar";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[45];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "47" || leituraUnidade == "USF Vila Piloto" || leituraUnidade == "Vila Piloto"){
		document.getElementById("tituloMapa").innerHTML = "USF Vila Piloto";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[46];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "48" || leituraUnidade == "CRAS Vila Piloto" || leituraUnidade == "Cras Vila Piloto"){
		document.getElementById("tituloMapa").innerHTML = "CRAS Vila Piloto";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[47];
		mapa.style.display = "flex";
	} 
	else if (leituraUnidade == "49" || leituraUnidade == "Arena Mix" || leituraUnidade == "Departamento de Turismo" || leituraUnidade == "Departamento de turismo"){
		document.getElementById("tituloMapa").innerHTML = "Arena Mix";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[48];
		mapa.style.display = "flex";
	}  
	else if (leituraUnidade == "50" || leituraUnidade == "Centro de Entomologia" || leituraUnidade == "Centro de entomologia"){
		document.getElementById("tituloMapa").innerHTML = "Centro de Entomologia";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[49];
		mapa.style.display = "flex";
	}
	else if (leituraUnidade == "51" || leituraUnidade == "Centro de Zoonoses" || leituraUnidade == "Centro de zoonoses"){
		document.getElementById("tituloMapa").innerHTML = "Centro de Zoonoses";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[50];
		mapa.style.display = "flex";
	}
	else if (leituraUnidade == "52" || leituraUnidade == "ESF Jupia" || leituraUnidade == "Jupia"){
		document.getElementById("tituloMapa").innerHTML = "ESF Jupia";
		mapa.style.display = "none";
		document.getElementById("urlMapa").src = localidade[51];
		mapa.style.display = "flex";
	}
	

 })