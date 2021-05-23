import React from 'react';

function About(){
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col s12">
                <h3 className="header center grey-text text-darken-3">OLATCG: uma ferramenta para você</h3>
                </div>
                <div className="col s8 offset-s2">
                    <h3 className="header grey-text text-darken-3">O que é?</h3>
                    <h6 className="grey-text">
                        O OLActg é uma plataforma criada com o intuito de apresentar algumas ferramentas da
                        Bioinformática na educação Básica, principalmente no ensino de Biologia em turmas de ensino
                        médio. Mas o que seria Bioinformática? Como ela surgiu? Que pesquisas contribuíram para o
                        seu estabelecimento enquanto campo de conhecimento?
                        O aumento no número de pesquisas no desenvolvimento da área das Ciências e o advento
                        de novas tecnologias, assim como a consolidação da conexão existente entre CTS ocorridos na
                        segunda metade do século XX, trouxe à baila o aprimoramento de novas tecnologias
                        computacionais que começavam a ser usadas em diversas áreas de conhecimento, contribuindo
                        para mudanças sociais, tanto no que tange ao coletivo como ao individual. Nesse contexto surge,
                        na década de 1980, a Bioinformática, que tinha como objetivo romper barreiras nas áreas
                        científicas mediante o desenvolvimento de novas abordagens que proporcionassem um novo
                        método de realizar análises e identificar dados biológicos (LESK, 2008).
                        Antes do seu estabelecimento como um campo dentro das Ciências, a Bioinformática foi
                        considerada um paradoxo, pois a transposição entre o real e o imaginário não era evidente, visto
                        que era improvável acreditar que estudiosos da área de Biologia pudessem utilizar ferramentas
                        computacionais para auxiliar no desenvolvimento de novas estratégias de pesquisas científicas
                        (DE ARAÚJO et al, 2008). Não se pode definir o instante zero em que a Bioinformática surgiu,
                        uma vez que um conjunto de situações fizeram desse campo o que ele é hoje. E, da mesma forma
                        como ocorre nas Ciências, o campo está em constante transição.
                        Em momentos cronológicos apresentados por Verli (2014), podemos destacar, na década
                        de 1950, a publicação na revista Nature do trabalho de James Watson e Francis Crick sobre a
                        estrutura em hélice da Molécula de DNA, pois ali foram apresentadas as bases moleculares que
                        compõem a molécula e os seus processos de replicação e tradução do material genético. Os
                        estudos de Linnus Pauling e Robert Corey em 1950 e Gopalasamudram N. Ramachandran em
                        1960 que contribuíram para o entendimento da estrutura tridimensional das proteínas foram
                        também um marco importante nesse processo.
                        Porém, somente anos após esses estudos, foi publicado um trabalho por Cyrus Levinthal
                        em 1966, onde o computador começara a ser utilizado para a visualização do formato
                        tridimensional de algumas moléculas. Curiosamente, se pensamos em Bioinformática também
                        como uma ferramenta de análise de sequências genômicas, podemos datar seu início na década
                        de 1970, quando um estudo de Needleman e Wunsch (1970) foi tido como ponto de partida para
                        o desenvolvimento de algoritmos de alinhamento de sequência de acompanhamento,
                        aperfeiçoando e refinando a ideia básica.
                        O advento de tecnologias e o consequente aprimoramento das máquinas de
                        processamento computacional proporcionaram um crescente de processos o que levou ao
                        refinamento desses estudos iniciais. Outro fator importante foi a redução no custo de produção
                        de computadores, posto que possibilitou uma maior acessibilidade a aplicações que surgiam a
                        fim de viabilizar a utilização da Informática em outros campos da área da saúde, bem como o
                        desenvolvimento de técnicas aplicadas.
                    </h6>
                    <h3 className="header grey-text text-darken-3">Mas qual seria a definição para Bioinformática?</h3>
                    <h6 className="grey-text">
                        Existem algumas diferentes definições, ela pode ser entendida como um campo de saber interdisciplinar que visa investigar e
                        desenvolver sistemas que colaborem com a compreensão do fluxo de informações, desde os
                        genes até estruturas moleculares, e sua consequente influência nas enfermidades, saúde e estudos
                        ambientais (PEREZLEO SOLÓRZANO et al., 2003). Lesck (2019) definiu da seguinte forma:
                        “A bioinformática e a biologia computacional envolvem a análise de dados biológicos,
                        particularmente sequências de DNA, RNA e proteínas. Os dados clássicos da bioinformática
                        incluem sequências de DNA de genes ou genomas completos, sequências de aminoácidos de
                        proteínas, e estruturas tridimensionais de proteínas, de ácidos nucleicos e de complexos de
                        proteínas-ácidos nucleicos”.
                        É uma área que engloba pesquisa, desenvolvimento e utilização de ferramentas de
                        computador para o conhecimento de sistemas e processos biológicos, além de ser uma área
                        emergente, pois faz uso da Tecnologia da Informação para distribuir, organizar e analisar
                        informações biológicas. É uma tentativa de simplificar e resolver problemas biológicos
                        complexos que lança mão de sistemas e ferramentas de computação (PRATTA, 2018).
                    </h6>
                    <h3 className="header grey-text text-darken-3">O projeto genoma humana</h3>
                    <h6 className="grey-text">
                        O Projeto Genoma Humano (PGH) teve início em 1990 e, devido a sua magnitude e
                        complexidade à época, durou mais de 10 anos para sua conclusão, sendo também um dos
                        grandes motivos para o advento da Bioinformática. O projeto fora iniciado com objetivos de
                        determinar toda a sequência de bases do genoma: não só fazer a identificação de todos os seus
                        genes como também armazenar as informações em um banco de dados confiável e que
                        possibilitasse ao público o aceso, além de aprimorar a forma como essa análise de dados era feita
                        (FARAH, 2007). O PGH deu início a uma série de projetos que envolviam o sequenciamento de
                        plantas, mamíferos, invertebrados, fungos, bactérias, vírus, entre outros (VENTER, 2010).
                    </h6>
                    <h3 className="header grey-text text-darken-3">E hoje em dia?</h3>
                    <h6 className="grey-text" name="hoje">
                        Atualmente, muitas espécies já possuem seus genomas sequenciados, e este número
                        continua a crescer. Nesse sentido, a área da Bioinformática produz e explora um grande volume
                        de dados, e para que esses dados sejam armazenados, utilizam-se bancos de dados, como por
                        exemplo: Nucleotide Sequence Database (EMBL-Bank) no Reino Unido; o Banco de Dados de
                        DNA do Japão (DDBJ), e GenBank do Centro Nacional de Informações sobre Biotecnologia
                        (NCBI) (LESK, 2019).
                        O GenBank armazena informação sobre sequências nucleotídicas de aproximadamente
                        260.000 espécies (BENSON et al, 2013; PMID: 23193287). Em 1982, quando se iniciou o
                        depósito de sequências em suas bases, o GenBank possuía 606 sequências nucleotídicas e
                        680.338 bases. Hoje já conta com mais de 171 milhões de sequências depositadas
                        (http://www.genebio.ufba.br/genbank/ acesso em 05/06/2020).
                        Como apontam Silva, Notari &amp; Alba (2020, p.14) “Dados biológicos processados geram
                        mais dados biológicos, o ritmo é frenético” e para que esses dados sejam estudados e
                        proporcionem os avanços nas pesquisas médicas, biotecnológicas e farmacêuticas, a
                        Bioinformática se faz presente. Sua demarcação acontece como um campo de saber diretamente
                        relacionado ao desenvolvimento de técnicas que aprimorem a relação das Ciências da
                        computação com as áreas Biomédicas; daí o surgimento de novas aplicações de métodos
                        computacionais em problemas biológicos e em experimentações in sílico, contribuições efetivas
                        para o estudo da prevenção e tratamento de doenças (CASANELLA SAINT-BLANCARD
                        &amp;  RODRIGUEZ JORGE, 2015).
                        Nos dias atuais tem ocorrido um gradativo aumento de informações oriundas de
                        descobertas científicas do meio acadêmico nas três áreas, em especial para estudos relacionados
                        a Genética, Biologia Molecular e Biotecnologia para o público em geral. Muito se deve a
                        investimentos recorrentes em divulgação científica e aos meios de comunicação de massa.
                        Muitas dessas informações advêm da Genética Molecular, um campo da Genética e da Biologia
                        Molecular que estuda a estrutura, organização e função dos genes (FULTON, 2008; PIERCE,
                        2012).
                        Os dados gerados pela Bioinformática possibilitam a coleta detalhada de informações
                        sobre o código genético dos seres vivos, sendo que, atualmente, isto se dá de maneira
                        extremamente rápida. Se compararmos, por exemplo, o tempo para a análise de uma sequência
                        contendo cerca de doze mil bases, o que demorava cerca de um ano para ser decodificado, hoje
                        se dá em um minuto. Tornam-se fascinante as possibilidades de estudo do material genético de

                        uma célula viva e sua consequente ajuda na interpretação, inclusive, dos processos evolutivos
                        (DE ARAUJO et al, 2008).
                        Todas essas possibilidades apresentadas no estudo da Bioinformática abrem caminho
                        hoje para um maior entendimento da população com relação aos mecanismos de ação e
                        disseminação de patógenos causadores de doenças, por exemplo. A popularização dessas
                        informações relativas a dados Biológicos nas atividades escolares, principalmente na área da
                        Genética, contribui para que a população tenha um conhecimento básico desta área, auxiliando a
                        compreensão, desde a estrutura molecular do DNA até os mecanismos envolvidos na transmissão
                        das características hereditárias.
                    </h6>
                    <h3 className="header grey-text text-darken-3">Conceitos-chave no Entendimento da Bioinformática</h3>
                    <h6 className="grey-text">
                        <b>Algoritmo:</b> sequência lógica de instruções necessárias para executar uma tarefa.
                    </h6>
                    <h6 className="grey-text">
                        <b>Alinhamento:</b> método de organização de sequências ou estruturas biológicas para
                        evidenciar regiões similares e dissimilares. Estes métodos estão geralmente atrelados
                        a inferências funcionais ou evolutivas.
                    </h6>
                    <h6 className="grey-text">
                        <b>Alinhamento Múltiplo:</b> alinhamento que envolve mais de duas sequências ou estruturas.
                    </h6>
                    <h6 className="grey-text">
                        <b>Alinhamento Simples:</b> alinhamento que envolve apenas duas sequências ou estruturas.
                    </h6>
                    <h6 className="grey-text">
                        <b>Ancestral:</b> organismo ou sequência que originou novo(s) organismo(s) ou sequência(s). Em alguns
                        casos pode ser considerado o mesmo que primitivo.
                    </h6>
                    <h6 className="grey-text">
                        <b>Aproximação dos vizinhos:</b> neighbor joining (NJ), método de inferência filogenética
                        quantitativo baseado em distância genética.
                    </h6>
                    <h6 className="grey-text">
                        <b>Biologia de sistemas:</b> área da bioinformática que estuda sistemas moleculares complexos e como
                        as moléculas interagem entre si.
                    </h6>
                    <h6 className="grey-text">
                        <b>BLAST:</b> Basic Local Alignment Search Tool (Ferramenta de Busca por Alinhamento Local
                        Básico), empregado para buscar sequências em bancos de dados com base em
                        sua similaridade.
                    </h6>
                    <h6 className="grey-text">
                        <b>Clado:</b> grupo formado por um ancestral e todos seus descendentes, um ramo único em
                        uma árvore filogenética.
                    </h6>
                    <h6 className="grey-text">
                        <b>Grupos irmãos:</b> clados que dividem um ancestral comum.
                    </h6>
                    <h6 className="grey-text">
                        <b>Homologia:</b> é um termo essencialmente qualitativo que denota uma ancestralidade comum de
                        determinada sequência.
                    </h6>
                    <h6 className="grey-text">
                        <b>HSP:</b> pares de segmentos de alta pontuação (high-scoring segment pairs), zonas de
                        similaridade entre sequências identificadas pelo BLAST.
                    </h6>
                    <h6 className="grey-text">
                        <b>Identidade:</b> Porcentagem de caracteres similares entre duas sequências (excluindo-se as
                        lacunas).
                    </h6>
                    <h6 className="grey-text">
                        <b>Indels:</b> identifica inserções e deleções de caracteres ao longo do processo evolutivo.
                    </h6>
                    <h6 className="grey-text">
                        <b>Lacunas (ou gaps):</b> regiões identificadas por hifens que representam a inserção/deleção de
                        caracteres ao longo do processo evolutivo.
                    </h6>
                    <h6 className="grey-text">
                        <b>Matches:</b> regiões que apresentam caracteres idênticos entre diferentes sequências.
                    </h6>
                    <h6 className="grey-text">
                        <b>Mismatches:</b> regiões que apresentam caracteres não idênticos entre diferentes sequências.
                    </h6>
                    <h6 className="grey-text">
                        <b>Sistemática:</b> estudo da diversificação das formas vivas e suas relações ao longo do tempo.
                    </h6>
                    <h6 className="grey-text">
                        <b>Taxonomia:</b> estudo que busca agrupar os organismos com base em suas características e
                        nomear os grupos obtidos, classificandoos em alguma escala.
                    </h6>
                    <h6 className="grey-text">
                        <b>Taxon:</b> grupo (de qualquer nível hierárquico) proposto pela taxonomia.
                    </h6>
                    <h6 className="grey-text">    
                        <b>Tradução:</b> tradução (in silico) de uma sequência de mRNA em sua possível sequência proteica
                        correspondente.
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default About;