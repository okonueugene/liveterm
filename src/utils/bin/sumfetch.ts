import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@          DONATE 
         @|  @@@@@@@@@@@@@@@@   @@           <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
         @|                      @@          <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

`;
  }
 else if (config.ascii === 'CV') {
    return `                                                  
    NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN       sumfetch: summary display    -----------
    XXXXXNNNNNNNNNNNNNNKkdlllodkKNNNNNNNNNNNNNNNNN       ABOUT
    XXXXXXXXXNNNNNNNNOl,,''',,,,;cxKNNNNNNNNNNNNNN       ${config.name}
    KKKKKXXXXXXXNNNNk,,'',,,,,,,,,;:0NNNNNNNNNNNNN      ﰩ ${config.ps1_hostname}
    KKKKKKKKXXXXXXNKccc:::cccccllll:xNNNNNNNNNNNNN       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
    KKKKKKKKKKXXXXXkc:::ccclllooooooxNNNNNNNNNNNNN      爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
    KKKKKKKKKKXXXXXkl:::cllooodoooodkNNNNNNNNNNNNN      -----------
    KKKKKKKKKKKXXXKxl:;::cclllclooddxKNNNNNNNNNNNN       CONTACT 
    KKKKKKKKKKKKXXlcc:::c;:llcc:llodll0NNNNNNNNNNN       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
    KKKKKKKKKKKKKXkcc::cc:clllllooodcdXNNNNNNNNNNN       <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
    KKKKKKKKKKKKKKKdl::cc:cooooodddxkXNNNNNNNNNNNN       <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    KKKKKKKKKKKKKKKKkc:::;ccllooookXNNNNNNNNNNNNNN      
    KKKKKKKKKKKKKKKKKdc;:cllooclodKNNNNNNNNNNNNNNN
    KKKKKKKXXXXXXXXXXxcc::clllloodXNNNNNNNNNNNNNNN
    KKKKKKKKXXXXXXK0lc;;:;;:::lllox0XNNNNNNNNNNNNN
    KKKKKKKKKKKK0000o:::::::clllooooodkXNNNNNNNNNN
    KKKKKKKKKXKKKKKK0o::::::clllloooooONXXNNNNNNNN
    KKKKKXXKXXKKKKKKKKOdccccccllooodkKXXXXXXXNNNNN
    0KKKKXXXXXXKKKXKKKKXKOxolldxk0KXXXXNNNXXXXNNNN
    0KKKKXXXXXKKXXXXXXXXXXXXKXXXXXXXXNNXXNXXNXNNNN
    0KKKKXXXXKXXXXXXXXXXXXXXXXXXXXXXXNNNXXXNXXNNNN
    0KXKKXXXKXXXXKXXXXXXXXXXXXXXXXXXXXNNNXXNXXNNNN

`;
  }
   else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓        > L I V E T E R M        ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             DONATE 
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                   <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

`;
  }
};

export default sumfetch;

