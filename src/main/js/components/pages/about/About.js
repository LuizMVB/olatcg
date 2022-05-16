import React from 'react';
import '../../../../static/css/About.css';
import Toolkit from '../../../infra/Toolkit';

function About() {
    const msg = Toolkit.Messages.getMessages;
    return (
        <>
            <div className="aboutTextSection">
                <div class="row purple lighten-5">
                    <div class="col s3 sidebar">
                        <h3 className="header">Tópicos</h3>
                        <h5 className="header grey-text text-darken-3 " href="#part1">OLATCG: uma ferramenta para você</h5>
                        <div className="subitem hoverable"><a href="#title1">O que é?</a></div>
                        <div className="subitem hoverable"><a href="#title2">Mas qual seria a definição para Bioinformática?</a></div>
                        <div className="subitem hoverable"><a href="#title3">O projeto genoma humano</a></div>
                        <div className="subitem hoverable"><a href="#title4">E hoje em dia?</a></div>
                        <div className="subitem hoverable"><a href="#title5">Conceitos-chave no Entendimento da Bioinformática</a></div>
                        <div className="subitem hoverable"><a href="#title6">Tutorial de Utilização</a></div>
                    </div>
                    <div class="col s9 white" style={{padding: '50px'}}>
                        <h2 className="header grey-text text-darken-3">{msg('about.text.title.olatcgParaVoce')}</h2>
                        <h3 className="header grey-text text-darken-3" id="title1">{msg('about.text.title.oQueE')}</h3>
                        <h6>
                            {msg('about.text.content.oQueE.p1')}
                        </h6>
                        <h6>
                            {msg('about.text.content.oQueE.p2')}
                        </h6>
                        <div class="divider"></div>
                        <h3 id="title2" className="header grey-text text-darken-3">{msg('about.text.title.definicaoBioinfo')}</h3>
                        <h6>
                            {msg('about.text.content.definicaoBioinfo')}
                        </h6>
                        <div class="divider"></div>
                        <h3 id="title3" className="header grey-text text-darken-3">O Projeto Genoma Humano</h3>
                        <h6>
                            O Projeto Genoma Humano (PGH) teve início em 1990 e, devido a sua magnitude e
                            complexidade à época, durou mais de 10 anos para sua conclusão, sendo também um dos
                            grandes motivos para o advento da Bioinformática. O projeto foi iniciado com a finalidade de
                            determinar toda a sequência de bases do genoma: não só fazer a identificação de todos os seus
                            genes como também armazenar as informações em um banco de dados confiável e que
                            possibilitasse acesso ao público, além de aprimorar a forma como essa análise de dados era feita
                            (FARAH, 2007). O PGH deu início a uma série de projetos que envolviam o sequenciamento de
                            plantas, mamíferos, invertebrados, fungos, bactérias, vírus, entre outros (VENTER, 2010).
                        </h6>
                        <div class="divider"></div>
                        <h3 id="title4" className="header grey-text text-darken-3">E hoje em dia?</h3>
                        <h6 name="hoje">
                            Atualmente, muitas espécies já possuem seus genomas sequenciados, e este número
                            continua a crescer. Nesse sentido, a área da Bioinformática produz e explora um grande volume
                            de dados, e para que esses dados sejam armazenados, utilizam-se bancos de dados, como por
                            exemplo: Nucleotide Sequence Database (EMBL-Bank) no Reino Unido; o Banco de Dados de
                            DNA do Japão (DDBJ), e GenBank do Centro Nacional de Informações sobre Biotecnologia
                            (NCBI) (LESK, 2019).
                        </h6>
                        <h6>
                            O GenBank armazena informação sobre sequências nucleotídicas de aproximadamente 478.000
                            espécies formalmente descritas (SAYERS et al, 2021). Em 1982, quando se iniciou o depósito
                            de sequências em suas bases, o GenBank possuía 606 sequências nucleotídicas e 680.338 bases.
                            Hoje já conta com mais de 2,1 bilhões de sequências de nucleotídeos depositadas. Atualizações
                            recentes abarcam inclusive novos recursos para dados relacionados ao vírus SARS-COV2
                            (SAYERS et al, 2021).
                        </h6>
                        <h6>
                            Como apontam Silva, Notari &amp; Alba (2020, p.14) “Dados biológicos processados geram
                            mais dados biológicos, o ritmo é frenético” e para que esses dados sejam estudados e
                            proporcionem os avanços nas pesquisas médicas, biotecnológicas e farmacêuticas, a
                            Bioinformática se faz presente. Sua demarcação acontece como um campo de saber diretamente
                            relacionado ao desenvolvimento de técnicas que aprimorem a relação das Ciências da
                            computação com as áreas Biomédicas; daí o surgimento de novas aplicações de métodos
                            computacionais em problemas biológicos e em experimentações in sílico, contribuições efetivas
                            para o estudo da prevenção e tratamento de doenças (CASANELLA SAINT-BLANCARD
                            &amp;  RODRIGUEZ JORGE, 2015).
                        </h6>
                        <h6>
                            Nos dias atuais tem ocorrido um gradativo aumento de informações oriundas de
                            descobertas científicas do meio acadêmico nas três áreas, em especial para estudos relacionados
                            a Genética, Biologia Molecular e Biotecnologia para o público em geral. Muito se deve a
                            investimentos recorrentes em divulgação científica e aos meios de comunicação de massa.
                            Muitas dessas informações advêm da Genética Molecular, um campo da Genética e da Biologia
                            Molecular que estuda a estrutura, organização e função dos genes (FULTON, 2008; PIERCE,
                            2012).
                        </h6>
                        <h6>
                            Os dados gerados pela Bioinformática possibilitam a coleta detalhada de informações
                            sobre o código genético dos seres vivos, sendo que, atualmente, isto se dá de maneira
                            extremamente rápida. Se compararmos, por exemplo, o tempo para a análise de uma sequência
                            contendo cerca de doze mil bases, o que demorava cerca de um ano para ser decodificado, hoje
                            se dá em um minuto. Tornam-se fascinante as possibilidades de estudo do material genético de
                            uma célula viva e sua consequente ajuda na interpretação, inclusive, dos processos evolutivos
                            (DE ARAUJO et al, 2008).
                        </h6>
                        <h6>
                            Todas essas possibilidades apresentadas no estudo da Bioinformática abrem caminho
                            hoje para um maior entendimento da população com relação aos mecanismos de ação e
                            disseminação de patógenos causadores de doenças, por exemplo. A popularização dessas
                            informações relativas a dados Biológicos nas atividades escolares, principalmente na área da
                            Genética, contribui para que a população tenha um conhecimento básico desta área, auxiliando a
                            compreensão, desde a estrutura molecular do DNA até os mecanismos envolvidos na transmissão
                            das características hereditárias.
                        </h6>
                        <div class="divider"></div>
                        <h3 id="title5" className="header grey-text text-darken-3">Conceitos-chave no Entendimento da Bioinformática</h3>
                        <h6>
                            <b>Algoritmo:</b> sequência lógica de instruções necessárias para executar uma tarefa.
                        </h6>
                        <h6>
                            <b>Alinhamento:</b> método de organização de sequências ou estruturas biológicas para
                            evidenciar regiões similares e dissimilares. Estes métodos estão geralmente atrelados
                            a inferências funcionais ou evolutivas.
                        </h6>
                        <h6>
                            <b>Alinhamento Múltiplo:</b> alinhamento que envolve mais de duas sequências ou estruturas.
                        </h6>
                        <h6>
                            <b>Alinhamento Simples:</b> alinhamento que envolve apenas duas sequências ou estruturas.
                        </h6>
                        <h6>
                            <b>Ancestral:</b> organismo ou sequência que originou novo(s) organismo(s) ou sequência(s). Em alguns
                            casos pode ser considerado o mesmo que primitivo.
                        </h6>
                        <h6>
                            <b>Aproximação dos vizinhos:</b> neighbor joining (NJ), método de inferência filogenética
                            quantitativo baseado em distância genética.
                        </h6>
                        <h6>
                            <b>Biologia de sistemas:</b> área da bioinformática que estuda sistemas moleculares complexos e como
                            as moléculas interagem entre si.
                        </h6>
                        <h6>
                            <b>BLAST:</b> Basic Local Alignment Search Tool (Ferramenta de Busca por Alinhamento Local
                            Básico), empregado para buscar sequências em bancos de dados com base em
                            sua similaridade.
                        </h6>
                        <h6>
                            <b>Clado:</b> grupo formado por um ancestral e todos seus descendentes, um ramo único em
                            uma árvore filogenética.
                        </h6>
                        <h6>
                            <b>Grupos irmãos:</b> clados que dividem um ancestral comum.
                        </h6>
                        <h6>
                            <b>Homologia:</b> é um termo essencialmente qualitativo que denota uma ancestralidade comum de
                            determinada sequência.
                        </h6>
                        <h6>
                            <b>HSP:</b> pares de segmentos de alta pontuação (high-scoring segment pairs), zonas de
                            similaridade entre sequências identificadas pelo BLAST.
                        </h6>
                        <h6>
                            <b>Identidade:</b> Porcentagem de caracteres similares entre duas sequências (excluindo-se as
                            lacunas).
                        </h6>
                        <h6>
                            <b>Indels:</b> identifica inserções e deleções de caracteres ao longo do processo evolutivo.
                        </h6>
                        <h6>
                            <b>Lacunas (ou gaps):</b> regiões identificadas por hifens que representam a inserção/deleção de
                            caracteres ao longo do processo evolutivo.
                        </h6>
                        <h6>
                            <b>Matches:</b> regiões que apresentam caracteres idênticos entre diferentes sequências.
                        </h6>
                        <h6>
                            <b>Mismatches:</b> regiões que apresentam caracteres não idênticos entre diferentes sequências.
                        </h6>
                        <h6>
                            <b>Sistemática:</b> estudo da diversificação das formas vivas e suas relações ao longo do tempo.
                        </h6>
                        <h6>
                            <b>Taxonomia:</b> estudo que busca agrupar os organismos com base em suas características e
                            nomear os grupos obtidos, classificandoos em alguma escala.
                        </h6>
                        <h6>
                            <b>Taxon:</b> grupo (de qualquer nível hierárquico) proposto pela taxonomia.
                        </h6>
                        <h6>
                            <b>Tradução:</b> tradução (in silico) de uma sequência de mRNA em sua possível sequência proteica
                            correspondente.
                        </h6>
                        <div class="divider"></div>
                        <h3 id="title6" className="header grey-text text-darken-3">
                            Tutorial de Utilização
                        </h3>
                        <div class="video-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLiaBUvB6LWK1qhDKcL5blT0RffLBB7kmX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;