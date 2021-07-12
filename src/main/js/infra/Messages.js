var data = {

    //COMMON
    'common.logo.name'                          : 'OLATCG',
    'common.button.value.vamosLa'               : 'Vamos lá!',
    'common.button.value.voltar'                : 'Voltar',
    'common.simbol.separate'                    : '|',
    'common.name.tools.alinhamentoLocal'        : 'Alinhamento Local',
    'common.name.tools.alinhamentoGlobal'       : 'Alinhamento Global',
    'common.name.tools.buscaHomologa'           : 'Busca Homologa',
    'common.confirmar'                          : 'Confirmar',
    'common.cancelar'                           : 'Cancelar',
    'common.ok'                                 : 'Ok',

    // NAV
    'nav.links.home'                : 'Home',
    'nav.links.ferramentas'         : 'Ferramentas',
    'nav.links.conteudo'            : 'Conteúdo',
    'nav.links.filaProcessamento'   : 'Fila de Processamento',

    // FOOTER
    'footer.title.saberMais'        : 'Para saber mais sobre o nosso trabalho',
    'footer.text.redesSociais'      : 'Nos acompanhe nas redes sociais',
    'footer.links.title'            : 'Links',
    'footer.links.instagram'        : 'Instagram do Ciência, Sua Danada',
    'footer.links.facebook'         : 'Facebook do Ciência, Sua Danada',
    'footer.rodape.autoria'         : 'Desenvolvido por LuizMVB',
    'footer.rodape.linkedin'        : 'Linkedin',
    'footer.rodape.github'          : 'GitHub',

    // HOME
    'home.presentation.title'                       : 'Bem vindo ao OLATCG',
    'home.presentation.text'                        : 'Uma plataforma onde você pode aprender resolvendo problemas e ' + 
                                                      'começar a fazer suas primeiras análises através de uma interface interativa',

    'home.descriptionOlatcg.title'                  : 'O que é OLATCG?',
    'home.descriptionOlatcg.text'                   : 'O OLATCG é uma plataforma didática que tem por objetivo apresentar ' +
                                                      'ferramentas de Bioinformática que proporcionem aos visitantes uma ' + 
                                                      'experiência significativa e, consequentemente, um aprendizado ' + 
                                                      'transformador sobre o tema.',

    'home.pathOptions.title'                        : 'Escolha Seu Caminho',
    'home.pathOptions.aprendaBioinfo.title'         : 'Aprenda Bioinformática',
    'home.pathOptions.aprendaBioinfo.text'          : 'Aqui você pode acessar uma lista de conteúdos para aprender ' +
                                                      'os conceitos básicos por trás da Bioinformática.',
    'home.pathOptions.fazendoAnalises.title'        : 'Fazendo Análises',
    'home.pathOptions.fazendoAnalises.text'         : 'Através de modelos, comece a fazer análises em Bioinformática ' +
                                                      'utilizando uma interface de fácil uso',
    'home.collaboration.title'                      : 'Colaboração',

    //TOOLS
    'tools.title'                               : 'Tools',
    'tools.card.text.alinhamentoLocal'          : 'Compare um par de sequências para obter seu alinhamento individual ' +
                                                  'e a pontuação referente',
    'tools.card.text.alinhamentoGlobal'         : 'Alinhe duas sequências, ambas, do seu início ao fim com o alinhamento ' +
                                                  'alinhamento global entre ela e a pontuação referente',
    'tools.card.text.buscaHomologa'             : 'Submeta uma lista de sequências contra um banco de dados filogeneticamente ' +
                                                  'anotado e receba uma análise comparativa das combinações com maior similaridade ' +
                                                  'referente ao alinhamento dessas sequências',

    //GLOBAL ALIGNMENT
    'alignment.global.pageTitle'                    : 'Alinhamento Global',
    'alignment.global.description'                  : 'Utilize as sequências que você deseja alinhar nas caixas de texto a seguir. ' +
                                                      'Aproveite para fazer alterações manuais e ver o quanto os resultados podem ' +
                                                      'mudam. Além disso, você pode selecionar o algoritmo que deseja utilizar para ' +
                                                      'realizar o alinhamento e as penalidades de abertura e extesão no alinhamento. ' +
                                                      'Divirta-se!',
    'alignment.global.label.sequeanciaA'            : 'Sequência A',
    'alignment.global.label.sequenciaB'             : 'Sequência B',
    'alignment.global.tooltip.message.text'         : 'Verifique se as sequências estão com os caracteres corretos antes de enviá-las.',
    'alignment.global.tooltip.message.example'      : 'Ex.: A, T, C ou G caso DNA',
    'alignment.global.label.selectBase'             : 'O que você quer alinhar?',
    'alignment.global.select.option.escolhaOpcao'   : 'Escolha sua opção',
    'alignment.global.select.option.dna'            : 'DNA',
    'alignment.global.select.option.rna'            : 'RNA',
    'alignment.global.select.option.proteina'       : 'Proteína',
    'alignment.global.button.submmit.alinhar'       : 'Alinhar',
    'alignment.global.dialog.text'                  : 'Seu alinhamento está sendo realizado, seu id será exibido na tela',
    'alignment.global.dialog.ultimoId'              : 'Último ID: {}',

    //ALIGNMENT
    'alignment.dialog.processamento.title'            : 'Processamento Iniciado',
    'alignment.dialog.processamento.text1'            : 'Seu alinhamento está sendo realizado, seu id será exibido na tela.',
    'alignment.dialog.processamento.text2'            : 'Acompanhe o resultado na fila de processamento',
    'alignment.dialog.validacaoFalhou.title'          : 'Verifique suas sequências',
    'alignment.dialog.validacaoFalhou.text'           : 'Sua sequência possui alguns caracteres irregulares, verifique se ' +
                                                        'sua entrada está de acordo com o tipo de sequência selecionada',

    //LOCAL ALIGNMENT
    'alignment.local.button.submmit.alinhar'                : 'Alinhar',
    
};

function getMessages (key, ...args) {
    let msg = data[key];
    if(!data || !msg) {
        return undefined;
    } else if (args.length === 0){
        return msg;
    } else {
        return format(msg, args);
    }
};

function format(msg, args) {
    let argsIndex = 0;
    for (let index = 0; index < msg.length; index++) {
        if(msg[index] === '{' && msg[index+1] === '}') {
            msg = insert(msg, index, args[argsIndex]);
            argsIndex++;
        }
    }
    return msg;
}

function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

const Messages = {

    //MESSAGES DATA
    data: data,

    //FUNCTIONS
    getMessages : getMessages,
};

export default Messages;