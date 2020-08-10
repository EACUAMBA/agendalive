# Agendalive

# Edilson A. Cuamba - 10/08/2020 - Conhecendo o Angular

# Anotações para fazer o curso da Micheli Brito, Angular 9, Agenda Live


# Se tiver dificuldade em realizar o curso provavelmente este ficheiro terá a solução.



Descrição 
a) ignora o -> e os <com_texto_dentro>
b) 

1 - O primeiro comando que você deve dar é esse
-> npm install -g @angular/cli
	este comando ira baixar o angular CLI (Interface de linha de comando do angular) para permitir criar projectos angular.
	depois de baixar o nodejs, execute esse comando.


2 - Como criar um projecto? 
-> ng new <nome_do_projecto_angular>

Ao inserir esse comando o CLI irá perguntar se irá querer usar o roteamento do angular, selecione sim(y);
Depois disso ele irá pergunto que estilo(estitlo de costomização de documentos, pode ser CSS, SCSS, LESS etc, selecione CSS) irá usar? Selecione o que vai usar então.

Depois disso importe a pasta do  rpojecto para a sua idea;

Ao abrir a pasta vera uma pasta chamada "node_modules" nessa pasta contem todos os pacotes, dependencias que o npm baixou e intalou no nosso projecto.

No arquivo package.json é onde ficam as dependencias do nosso projecto 

3 - Inserir angular material dentro da nossa aplicação
	acesse o site material.angular.io - esse site tem conponentes prontos para usarmos no nosso projecto
	
	-> ng add @angular/material
	para adicionar o angular material no projecto basta inserir esse comando no terminal da nossa pasta root do projecto.
	
	depois disso ele vai nos perguntar que tema nos queremos usar para o nosso aplicativo.
	depois ele vai perguntar se eu quero usar o styles globlas do angluar vamos dizer sim y 
	e por fim ele vai perguntar se queremos usar as animações é so dizer sim, y;
	
4 - Como rodar um projecto no browser?
-> ng serve --port <port pode ser 333>  -o
	esse comando vai criar um server para acessarmos o angular.
	
5 - Como construir o nosso primeiro conponente?
Para isso vá a src/app, esse pasta é a raiz do nosso aplicativo. o root do app;
* procure um arquivo chamado app.modulos.ts 
* Visto que um conponente será um modolo da nossa aplicação temos que declarar o nosso modulo depois de criado aqui!
* Os conponente do angular material tambem deverão ser importados paaara este arquivo.

#temos tambem o arquivo app.conponente.html
este é aquele que obtivemos quendo subimos o nosso aplicaivo. depois de compilar todos os dador

#temos tambem o app.routing.module.ts
é neste arquivo que vamos mapear, mostrar para o angular depenedendo do caminho que ele devera abrir

	1 - Vamos criar diretorios para estruturar o nosso projecto
	2 - vamos criar dentro do src/app as pastas, views(vamos colocar os conponentes) e shared(ficnheiros que serao usados oou compartilhados por toda a aplicação)
	3 - para criar o conponenete dentro da pasta views colocamos o comando -> ng g<generated> c<conponenent> views/home (O conponenet vai se chamar home e estara na pasta views)
	depois disso vao surgir quatro novos arquivos (como nos nao vamos fazer testes, apaga o aruivo specs.ts)

6 - Como mapear o componenete?
	para isso vá ao arquivo app.routing depois disso dentro do array routes coloque uma nova routa, {path: ''<caminho onde esta o conponenete>, conponente: 'HomeComponent'<nome do conponenete>}
	
	depois disso no arquivo app.conponenet.html e vamos apagar tudo excepto a tag <router-outlet></router-outlet> pois ela é que vai pormiter nos acessar os nossos conponenetee
	
	
7 -  como inserir conponentes material angular dentro do nosso conponenete angular material

	Para importar vá ao material.angular.io copio o codigo da importacao na aba api do conpoenete que voce quer importar
	
	depois de copiar, vá para o arquivo app.module.ts e adicione um alinha de importacao, faça paste do codigo.
	depois pego o qeu este dentro do {este é o nome do conponenet e colo dentro do arraye de imports}
	
	Agora vá para exemplo da pagina do material.angular e depois copie o codigo do componenet, 

7.5 - Como adicionar Icons

	é possivel qeu ele tenha um <met-icon> sitiver voce devera importa-lo uma vez para passar a usar.
	para importar faça o mesmo processo que fizemos no conponenete material va no site do material importe
	
	
8 - Como adicionar um Botão?
	Vá no site busque o (Faça copy do codigo htmml)HTML e depois inporte o modulo
	importe tambem o css
	
9 - Como criar Um conponente?
	-> ng g(generate) c(component) views/home/live-list
	Não é necessario criar a pasta, o angular criará para voçe.
	Não é necessário mapear o componente no "app.module.ts" o angular já adicionou para você.

10 - Como incorporar um conponente dentro de um outro?
	Vá no arquivo "nome_do_componente.conponent.ts" e copie o nome do selector "selector: 'terá_um_nome_aqui'".
	
	Agora que já sabemos o nome do selector que vamos chamar, vamos na pagina html do conponenet euqe queremos incorporar este aqui.
	
	Estando na pagina iremos colocar o componente no lugar ideial usando as tags com o nome do selector "<selector></selector>". 

12 - Como adicionar um componente do material.angular.io?
	Vá para o site do material.angualr.io;
	
	Procura o conpoenente que deseja inserir e copie o codigo da importação;
	
	Exemplo: "import {MatTabsModule} from '@angular/material/tabs';"
	
	Esse codigo deverá ser inserido no arquivo "app.module.ts";
	
	Deverá ficar colocar o codigo abaixo de outras imports epor fim colocar no array de importações "imports: [MatTabsModule]", colocar apensa o nome do component;
	
	
13 - Como usar sistema de grids no angular?
	Para isso acesse o site "https://tburleson-layouts-demos.firebaseapp.com/#/docs" lá tem uma documentação completa de como usar o flexbox com angular.
	mas em poucas palavras ele vai criar uma <div> e você deverá colocar onde você quer queo conteudo siga essas regras.
	
14 - Como usar cards?
	Primeiro vá ao site "material.angular.io" copie a api e o codigo html;
	
	Cole o HTMl no lugar onde deverá estar a grid;
	
	por fim veja a pagina como vai ficar;
	
15 - Como definir limites para as grid, limites de tamanho?
	Para isso usamos o flexbox imbutido no proprio angular;
	para saber a regra acesse o site "https://tburleson-layouts-demos.firebaseapp.com/#/docs" faça a sua regra e copie os atributos.
	
	Para conseguir usar o grid do fxFlex devemos importar, ou instalar este conpoenente usando npm ;
	
	ex: o comando no npm para instalar o modulo de fxLayout
	"
	npm install @angular/flex-layout --save
	"
	
	Depois disso fazer a importação do FlexLayoutModule
	
	ex: este fica no arquivo app.module.ts
	"
	import { FlexLayoutModule } from "@angular/flex-layout";
	
	e adicionar nos 
	imports:[
		FlexLayoutModule
	]
	"
	
16 - Como pegar dados do backend?
	16.1 - Como criar os modelos que temos no backend?
	
		Vá para a pasta shared, pois é nessa paste que podemos criar e colocar arquivos que serão globais em todo o projecto, apertir de qualquer arquivo poderemos ter esses arquivos;
		
		Cria uma pasta chamada model, onde colocaremos os modelos;
		
		Cria um arquivo chamado "lesponsePageable.model.ts";
		
		Dentro do arquivovamos colocar algund codigos:
		"
			export class ResponsePageable{
				content: any[];
				first: boolean;
				last: boolean;
				number: number;
				numberOfElements: number;
				pageable: any[];
				size: number;
				sort: number:
				totalElements: number;
				totalPages: number;
			}
		"
		
		Mais uma vez
		
		Cria um arquivo chamado "live.model.ts";
		
		Dentro do arquivovamos colocar algund codigos:
		"
			export class Live{
				id: string;
				liveName: string;
				channelName: string;
				liveDate: string;
				liveTime: string;
				liveLink: string;
				registrationDate: string;
			}
		"
		
	16.2 - Como criar o service para gerir os dados?
		-> ng g(generate) s(service) shared/service/live
		
		Esse comando vai criar dois arquivos na pasta service, o live.service.tx e o live.service.spec.ts;
		
		Nos vamos usar o arquivo live.service.ts e iremos armazenar lá o nosso codigo para comunicar o angular com o banco de dados.
		
		Primeiro cria uma variavel(apiUrl) com a URL da nossa API, ex: http://localhost:8080/lives
		
		
		Criar uma variavel httpOption que armazenaráo cabeçalho  e etc, 
		
		ex:
		"
			httpOption = {
				headers: new HttpHeaders({
					'Content-Type': 'application/json'
				})
			};
		"
		
		
		Fazer o import do HttpClientModule, colocar no imports do "app.module.ts"
		
		Criar uma variavel no construtor chamada httpClient;
		
		ex:
		"
			private httpClient: HttpClient;
		"
		
		Criar os metodos que vao buscar dados na api getOque vairetornar(e que variaveis temosde dar na URL);
		
		ex: 
		"
			public getLivesWithFlag(flag: String): Observable<ResponsePageable>{
				return this.httpClient.get<ResponsePageable>(this.apiUrl+"?flag=" + flag)
			}
		"
		
		O observable é uma funcionalidade da biblioteca RXJS que sempre que a gente cria uma applicacao ja vem instalado e que é bome para trabalhar com dados assincronos por que quando agende cria a interface a gente vai chamar o obeservable dentro do conponenet live-list, e como a nossa api ira fazer uma requisicao de uma api externa talvez essa api externa demore para responder nao é instantaneo.
		
		Como isso funciona?
		
		Quando formos a chamar o metodo que retorna o observabe e ele ja tiver os dados prontos para retornar agenda ja deve deixair claro o que vamos fazer com os dados. Para isso Usamos o subscribe()
		
		Em poucos palavras:
		
		"	Quando o observable tiver os dados todos que pedimos ele vai executar ou chamr o metodo subscribe(){code;}	que tera um code para ser executado logo apos o chamamento, geralmento ele vai tratar os dados, colocar na list e muito mais e etc."
		
	16.3 - Como Buscar dados na API colocar no componenet?
		No conponent live-list.module.ts nós vamos implementar um subscrib() para que quando nos recebermos os dados da api logo seja colocado no conponenet, seja renderizado.
		
		Dentro do construtor vamos chamar uma variavel do tipo liveService, para podermos usar os metodos get e etc.
		
		ex:
		"
		constructor(
			public liveService: LiveService;
		){}
		"
		
		depois disso vamos criar variaveis para armazenar os dados vindos do liveService, precisamos de armazernar as variaveias realizadas e proximas, logo usaremos duas variaveir que armazenarao todos as lives, essas variaveis serão arrays[]
		
		ex:
		"
			livesPrevous: Live[];
		"
		
		
		Depois disso podemos chamar as lives, vamos criar uma metodo para isso;
		
		ex:
		"
			getLives(){
				this.liveService.getLivesWithFlag("previous").subscribe(data=>{
					this.livesPrevious = data.content;
					
					//parateste coloque console.log(this.livesPrevious)
				})
			}
		"
		
		para o metodo getLives funcionar deve estar debtro do metodo
		ex:
		"
		ngOnInit(): void{
			this.getLives();
		}
		"
		
		
		Já deves ter as lives no console do chrome, agora ja podemos trabalhar com o front-end materializar o que acabamos de fazer
		
17 - Como renderizar os dados buscados do backend?
	Os nossos dados ficarão dentro de um "<ng-container>";
	
	Um ng container tem a capacidade de receber dados e manipular eles, é ele que iremos usar neste caso. ele será renderizado como uma taghtml div, então coloque no ludar de uma div.
	
	17.1 - Como manipular os dados com ng-container?
		Nessa tag vamos colocar o atributo *ngFor="let item of items" onde items deverás substituir com a tua coleco de dados vindo do servidor ou de onde for e usaras o item para exibir exxe dado.
		

		
		ex:
		"
			<ng-container *ngFor="let live of livesPrevious">
				
			</ng-container>
		"
		
		Agora vamos colocar um estilo para o card, cria uma class na tag e vamos trabalhar no css, ficará assim:
		
		"
			.mat-card-live{
				border: 1px solid #fd8dc;
				border-radius: 4px 3px 6px / 2px 4px;
				padding-top: 15px;
				padding-left: 0px;
				padding-right: 0%;
				padding-bottom: 0;
				margin: 5px;
			}
			
			.mat-card-title-live{
				padding: 0 15px 0 10px;
				margin-bottom: 0;
				min-height: 70px;
			}
		"
		
		Depois disso vamos colocar os dados para serem exibidos para isso fazemos assim {{objecto.atributo}} desse jeito chamaremos o objecto que é a variaveil do "*ngFor='let objecto of listaObjectos' ";
		ex:
		"
		nome:
		<p>{{objecto.nome}}</p>
		"
18 - Como inserir o Link do youtube com SafeResourceUrl e DomSanitizer
	Pra isso inserimos mais um atributo no model, chamado urlSafe do tipo SafeResourceUrl;
	
	ex:
	"
		public urlSafe: SafeResourceUrl;
	"
	Agora no typescript do compoenent que exibe os dados vamos fazer umas modificações básicas:
	
		Vamos inserir mais um atributo a essa classe chamado sanitizer do pacote DomSanitizer
		
		ex:
		"
			public sanitizer: DomSanitizer; 
		"
		
		Vamos fazer um for para que todas as lives tenha um urlSafe tambem, então vamos
		
		Eu acho que o Sanitizer serve para averificar valor se é uma url valida;
		
		para isso vamos no metodo .getLives() dentro do subscribe criar um forEach no lives e depois para cada live colocar no atributo vazio que cramos o urlSafe um SafeResourceUrl usando o dom sanitizer.
		
		ex:
		"
			this.livesPrevious.forEach(live=>{
				live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink)
			})
		"
		Ele monta uma url segura para podermos inbutir no HTML com segurança
		Faça para livesNext too;
		
	Agora vamos colocar no HTML
		
		Dentro do "mat-card-content" vamos inserir um iframe(Um tipo de API que chama dados do youtube.) então ficará:
		
		ex:
		"
			<div>
				<iframe width="560" height="315" [src]="lives.urlSafe" framebarder="0" allow="acelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		"
		
19 - Como fazer o tratamento da data vida do Java formato("YYYY-MM-DDTHH:MM:SS")
	
	Para formatar vamos precisar de uma biblioteca chamada moment.JS
	=> npm install moment
	esse comando instala a biblioteca
	
	Depois disso vamos criar um pipe(um tipo de canalização, canal, tubo, etc que é usado para algo passar).
	
	Criaremos um directorio chamado pipe, ele sera onde ficarão as nossas classes de tratamento de dados.
	
	Depois disso usaremos o comando para criar o pipe propriamente dito.
	=> ng generate pipe shared/pipe/local-date-time
	
	Dentro do local-date-time.pipe vamos alterar o construtor do pipe, ele vai receber como argumento uma String e vai  retornar uma String novamente, a string que vai receber sera uma DateIn e que vai retornar sera uma dateOut.
	
	Agora dentro do escopo do metodo vamos criar uma variavel chamada dateOut que sera do tipo moment.Moment(Importa essa class por favor assim "import as moment from 'moment'"), que vai receber um momnet com dateIn e tambem o formato que esta vindo do parametro.
	 
	 ex:
	 "
	 	transform(dateIn: String):String{
			let dateOut: moment.Moment = moment(dateIn, "YYYY-MM-DDTHH-mm-ss");
			return dateOut.format("DD 'de' MM 'de' YYYY 'as' HH:mm");
		}
	 "
	 
	 Depois disso devemos colocar a classe local-date-time.pipe.ts como um providers detro do app.module.ts
	 
	 ex:
	 "
	 	providers:[
			LocalDateTimePipe
		]
	 "
	 
	 Para usar copiamos o name que vem em cima do nome da classe dentro do arquivo local-date-time.pip.ts;
	 
	 Depois vamos no HTML para usarmos, no local onde chamamos o live.liveDate colocamos uma barra "|" e deposi o nome do pipe, ou canal que deverá ser utilizado.
	
	Agora vamos decorar mais um pouco a nossa data usando um conponente novo, chips.
	
		Primeiro vá ao site do materiale import o chip para o seu project, isso ja vimo no artigo anterio; 
		Depois insira a dentro da tag <mat-chip></mat-chip> o que você que que esteja dentro do pipeline;
		

20 - Como criar um Dialog(Uma painel aberto sobre outros componenete que po se inserir um formulario dentro) para o formulario?
	Primiro import o conponent(MatDialogModulo) na aplicação, vá ao site do angular Material e copie o import desse compoenent.
	
	Depois disso vamos no exemplo do compoenent e vamos na aba TS (typtscrpt), analisando esse codigo podemos ver que ele devera inicialzar com um valor no construtor que é o "public dialog: MatDialog que devera ser inportado do import { MatDialog } from '@angular/material/dialog';" 
	
	Depois disso temos um metodo chamado OpenDialog() esse metodo é responsavel por abrir o painel do dialogo para nos então vamos copiar esse codigo do angular .material.io. e colalo fora de qualquer escopo que não seja o da classe;
	
	ex:
	"
		openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
	"
	
	Agora vamos criar um conponent novo que sera apresentado ao abrir o dilog. por ao o dialig tambem é um conpoennet mas queremos ter um outro conpoenet dentro dele uma component com o formulario.
	
	Então para isso vamos usar o comando 
	=> ng generate component views/home/live-form-dialog
	
	Depois de criar o conpoenet que sera apresentado ou aberto ao abrir o dialog queremos dizer ao open dialoque abra este dialog aqui , para isso vamos copiar o nome do conponenet, nome da classe (difinida como export class nomedaclass), e vamos colar no this.dialog.open(nomedaclass(conponent, algumas configuracoes de estilo));
	
	ex:
	"
		const dialogRef = this.dialog.open(LiveFormDialogComponent, {
      		width: '250px'
    	});
	"
	
	Agora vamos fazer configuracoes no conponent, 
		A primeiro podemos ver no TS do conponent no material.angular.io devemos dentro do conponent que será aprensentado no contrutor colocar uma variavel e deposi vamos criar um metodo para fechar o dialo veja no exemplo abaixo:
		
		ex:
		"
			constructor(
    			public dialogRef: MatDialogRef<NomeDoComponent>,
    			) {}

  			onNoClick(): void {
    			this.dialogRef.close();
  			}
		"
		
		Agora vamos copiar o HTML do Dialog e colocar no HTML do nosso component
		
		Depois disso muda os metodo onclick() que serão chamado se voce mudou os nomes nos compoenent.
		
		Depois disso vamos configura a acção que irá chamar addLive() o metodo que abre o dialog, isso faremos no html do conponent home vamos configurar um onClick() chame o metodo xy do home.ts
		So que com angular vamos fazer de forma diferente ficara assim
		ex:
		"
			<div (click)="addLive();" outros atributos>
		"
		 Depois disso o browser vai abrir o conponent;
		 
21 - Como criar um formulario (form-group) para enviar os dados da nova liva para o backend? isso no nosso conponenete que tera o formulario dentro;
	Primeiro vamos criar um FormGroup esta agrupara p formulario, permitirar utilizar o (FormArray e o FormControl).
	
	ex:
	"
		public liveForm: FormGroup;
	"
	
	Depois disso vamos inicializar um FormBuilder no contrutor para contruir um nosso formulario 
	
	ex:
	"
		constructor(
			private formBuilder: FormBuilder;
		){}
	"
	
	Depois no ngOnInit() vamos atribuir valores ao fromgroup, esse valores serão atribuidos assim que o conponent for iniciado.
	
	ex:
	"
		this.formgroup = this.formbuilder.group({
			 /*Aqui vamos difinir os parametros que serão enviados ao clicar no potão, os dados que serão inseridos no formulario, os campos.*/
			 liveName: [''/*Aqui defini i valor padrao caso nada seja enviado*/, [Validators.required]/*aqui defini se é obrigatorio ounão o valor.*/],
			 channelName: ['', [Validators.required]],
			 liveLink: ['', [Validators.required]],
			 liveDate ['', [Validators.required]],
			 liveTime: ['', [Validators.required]]
		})
	"
		
	Agora vamos importar modulos  qeu vamos utilizar no form quando formos a contruir o HTML
	
	Coloque eles no app.module.ts no imports:
	ex:
	"
		MatNativeDateModule,
		FormsModule,
		ReactiveFormsModule
	"
	
	Agora precisamos de criar o metodo post para acessar a api e enviar os dados que serao armazenados.
	
	Para isso vamos trabalhar no lives service.
		
		Vamo criar um metodo responsavel por fazer o post da live, esse metodo devera receber um objecto live do tipo any pois nao sabemos o que será. Como o poste nos retorna o objecto uqe foi criado vamos retornar um observable do tipo Live nesse metodo;
		Agora vamos difinir o return que será um httpclient.post<any>("URL", live(aquivo que vamos salvar), httpOption.headers dizendo o tipo de arquivo que será enviado. );
		
		ex:
		"
			public postLives(live: any): Observable<Live>{
    			return this.httpClient.post<any>(this.apiUrl, live, this.httpOption);
			}
		"
		
		Altere o tamanho do conponent Dialog(); usando o width dentro do metodo addLive() no Home>component.ts
		
22 - Como fazer um formulario dentro do Dialog()?
	Primeiro vamos dentro do HTML do conponent que sera chamado ao abrir o dialog(), que é o live-form-dialog.conponent.html;
	
	Agora vamo mudar o titulo do dialog();
	
	Entre o botão e o titulo vamos inserir uma o nosso formulario ficará assim:
	ex:
	"
		<div mat-dialog-content>
			<form class="exemple-form" [formGroup]="liveForm" <!--Aqui nos dizemos qual é o formGroup que estará relacionado ao formulario, esse é o nome da variavel do form group que cramos no typescript do mesmo conponent, ele vai receber os parametros para salvar a live-->>
				
			</form>
		</div>
	"
	
	agora vamos inserir o CSS
	ex:
	"
		example-form{
			min-width: 150px;
			max-width: 500px;
			width: 100%;
		}
		
		.example-full-width{/* Defini a largura de cada mat formField que ser;a iserida na aplicação*/
			width: 100%;
		}
	"
	
	Agora vamos fazer os inputs, os campos, Para isso vamos usar um conpoent chamado formField:
	
	ex:
	"
		<mat-form-field appearance="fill" class="example-full-width">
    		<mat-label>Nome da Live</mat-label>
    		<input matInput formControlName="liveName" name="liveName"><!--Aqui passamos o nome do parametro difinido no formBuilder -> criado no ts-->
			Faça isso para outros parametros
  		</mat-form-field>
		
		Não esqueça de importar o MatInputModule;
		import { MatInputModule } from '@angular/material/input';
	"
	
	Depois criaremos o metodo createLive() no .ts do conponent:
		Esse metodo vai receber a live e vamos enviar ao metodo post;
		Para acessar o metodo post que esta no service pprecisamos instanciear no construtor e dppois;
		Depois no metodo vamos acessar o medoto postLives do post e colocar uma live que receberemos do liveForm.value e fazer um subcrib sem nda por quenquanto
		Depois disso vamos fehcar a caixa de dialog , this.dilogRef.close();
		Depois resetar o liveForm, usando o this.liveForm.reset();
		
		ex:
		"
		createLive(){
			this.liveService.postLive(this.liveForm.value).subscribe(data=>{});
			this.liveForm.reset();
			this.dialogRef.close();
		}
		"
		
		Inserindo o Datepicker no formulario:
		
			Vamos nos conponents do Material e importamos o conponent.
			no HTML vamos colocar agora uma diva para fazer um bloco com dois date picker;
			
			ex:
			"
				<div fxLayout="row wrap">
					<div fxFlex="50" fxFill fxLayoutAlign="start center">
						<mat-form-field class="example-full-width"
  							<mat-label>Data da Live</mat-label>
  							<input matInput [matDatepicker]="picker">
  							<mat-datepicker-toggle matSuffix [for]="picker" formControlName="liveDate" name="liveDate"></mat-datepicker-toggle>
  							<mat-datepicker #picker></mat-datepicker>
						</mat-form-field>
					</div>
					<div fxFlex="50" fxFill fxLayoutAlign="end center">
						<mat-form-field appearance="fill" class="example-full-width">
    						<mat-label>Hora da Live</mat-label>
    							<input matInput formControlName="liveTime" name="liveTime" type="time" #time><!--Aqui passamos o nome do parametro difinido no formBuilder -> criado no ts-->
									Faça isso para outros parametros
  						</mat-form-field>
					</div>
				</div>
			"
			
			 Como a data vem junta vamos fazer umas alteracoes para concatenar elas;
			 
			 então vamos no TS para fazer isso;
			 
			 no metodo createLive()
			 vamos criar uma variavel do tipo newDate que sera um moment
			 
			 ex:
			 "
			 	let newDate: moment.Moment = moment.utc(this.liveFrom.value.liveDate).local();
				this.liveForm.value.liveDate = newDate.format("YYYY-MM-DD") + "T" + this.liveForm.value
				
				///Depois vamos adicionar no metodo closeDialog(){
					this.liveForm.reset();
					this.dialogRef.close();
				}
			 "


23 - Final - Como criar um reload ao adicionar nova live no sistema?
	Para isso vamos inserir um novo comando que vai actualizar a pagina ao clicar no botao adicionar live;
	
	ex:
	"
		windows.location.reload();
	"
	
	Agorra precisamos colocar um progress bar no programa para o utilizado sabe o que esta contecendo no progrma.
	
	Para isso utilizaremos um Indeterminated Progress Bar;
	
	Para isso vamos criar variaveis de controle, e eneuqnto as lives não são carrgeadas vamos mostar o prograss bar e depois que forem carregadas vamos mostrar.
	
	No Live LIst vamos criar duas variaveis de controle, uma chamada next e outras previous, essa variavaie irão receber o valor false serão boolean, que significa que ainda não foram carregadas;
	
	então no metodo getLives() temos deois subscribe, eles são acionados quando as lives estão sendo carregadas
	
	Dentro dos subscribe vamos inserir a variavel se for o subscribe de nex vamos inserir um true na variavel next vice versa;
	
	Note que esse valor, essa variavel tem que estar de pois de ser executado toda a logica de carragamento de live. porque se colocar antes o o progress bar ira desaparecer antes mesmo de ter sido carragado o liveListConponent;
	
	"Essa é uma logica boa aprende"
	
	Agora vamos para o HTML, aqui nos vamos deternimar que quando as lives ainda estiverem a ser carrgadas vamos mostrar o progress bar e caso contrario vamos deixar de mostrar;
	
	Isso significa que , lembra da variavel que criamos chamada next e previous, quando elas tiverem false mostramos e quando tiverem tru deixamos de mostrar;
	
	Entaão vamos colocar o nosso progress bar a baixo do tab, das abas. mas onde exatament, dentro delas mas abaixo do primeiro mat-tab label="Proximas ou Realizadas"
	
	Então vamos criar um *ngIf como atributo no progress bar
	
	ex:
	"
		<mat-progress-bar *ngIf="!next" mode="indeterminate"></mat-progress-bar>
		Isso vai fazer com que quando a listagem for falase ele mostre, Mas como?? espera leia: o *ngIf="true" colocado o conponent faz o que? ele mostra o conponent não é? se for false ele não mostra, logo quando você colocar next de pricipio ele ser false, porque não tem Lives, se colocassemos sem o negação ele não ia mostra o progress bar por que seria false, mas qunado a listagem estivesse completa ele isa mostrar, por ja estaria true a o next. entende; agora se queremos mostrar enquanto esta false o next devemos dizer isso ao angular colocando um invert no next, logo quando o next for false sera true se for true sera false.
	"
	
	Então na div abaixo que queremos que seja ocultada quando o liveList.nest = variavel seja true; entao so precisamos de colocar um *ngIf="next" assim enquanto o neext esta com false ele não mostra mas quando mudar para true ele vai mostrar....
	
	valeu!!! é tudo.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
