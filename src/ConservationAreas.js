import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Polyline } from "react-leaflet";

const CONVERSATION_AREAS = gql`
  query getConversationAreas {
    getConservationAreas
  }
`;

const polyline = [
  [52.907178626321972, -1.228548221297923],
  [52.90720686165664, -1.228604964649924],
  [52.907091838312006, -1.228611466911329],
  [52.907058530894652, -1.228604326402863],
  [52.906669841032027, -1.228551305343284],
  [52.906562007954108, -1.228529875929004],
  [52.906522447907001, -1.228598229773465],
  [52.906400922054722, -1.228808098953785],
  [52.906374869169134, -1.228852274450473],
  [52.906269237609564, -1.229031826090174],
  [52.90628165554601, -1.229061491287632],
  [52.90630319745344, -1.229125786734812],
  [52.906305492730176, -1.229133180227138],
  [52.906101168711118, -1.229342433481612],
  [52.906034930752334, -1.229414083849839],
  [52.905892217042023, -1.229087133429988],
  [52.905748753317042, -1.229268840217747],
  [52.905708896542485, -1.229319206831382],
  [52.905707381022829, -1.229321166571994],
  [52.905531371867426, -1.229544038809157],
  [52.9055305059807, -1.229545118718036],
  [52.905529677537423, -1.229546150385058],
  [52.905510220601307, -1.229595560152777],
  [52.905520252303958, -1.229617684539701],
  [52.905532100946687, -1.229642750360166],
  [52.905538943363595, -1.229658240631746],
  [52.905545341168072, -1.229674482196058],
  [52.905560852559184, -1.229709890836373],
  [52.905586907595115, -1.229777079189632],
  [52.905590106489555, -1.22978519998897],
  [52.905596035605924, -1.229798476263592],
  [52.905601955097097, -1.229810265895633],
  [52.905607415540409, -1.229820576848682],
  [52.905613315782475, -1.229829393193609],
  [52.905675763993322, -1.230033281769843],
  [52.905627364234761, -1.230107550843397],
  [52.905627253470449, -1.230107659856383],
  [52.905645108857016, -1.230158160032258],
  [52.905738488719095, -1.230418929946724],
  [52.905763243162426, -1.2304935761354],
  [52.905788446982264, -1.230568214453013],
  [52.90581362672205, -1.230639136223215],
  [52.905836960142899, -1.230706746887402],
  [52.905830189990091, -1.230712143463955],
  [52.905674667785654, -1.230836666772282],
  [52.905674202023874, -1.230834147422607],
  [52.905625794235178, -1.230577041290208],
  [52.905608266618366, -1.230466137685938],
  [52.905571898827368, -1.230236027822583],
  [52.905541928564652, -1.230175004509119],
  [52.905529717720775, -1.230177302336707],
  [52.905527963313865, -1.23018402407586],
  [52.905523546033642, -1.230195996829441],
  [52.905520438546702, -1.230201999125788],
  [52.905518220287078, -1.230206498857455],
  [52.905515552604108, -1.230211006548791],
  [52.905511092037514, -1.230216289401579],
  [52.905506172428893, -1.23022009357023],
  [52.90548741688545, -1.230239010922518],
  [52.905471333832772, -1.230254163895784],
  [52.90545926000032, -1.230263744648545],
  [52.905418619283154, -1.230304162260293],
  [52.90541715900855, -1.230300768457431],
  [52.905349879343383, -1.23037823321756],
  [52.905350566744374, -1.230401117889842],
  [52.905333056093596, -1.230417931521429],
  [52.9052709516615, -1.230475529808109],
  [52.905213346239996, -1.230533791678755],
  [52.905166464456343, -1.230582199342699],
  [52.905083897958143, -1.230672868961533],
  [52.905081491259423, -1.230676033840084],
  [52.905079886793573, -1.230678143758919],
  [52.905026402974265, -1.230748226526419],
  [52.90500688836206, -1.23077488821402],
  [52.904924374059526, -1.230887560748398],
  [52.904847725734541, -1.230989870206893],
  [52.904806460805851, -1.231045016820834],
  [52.904738773488006, -1.231129028399168],
  [52.904691677516944, -1.231186062028522],
  [52.904681422433292, -1.231198881103221],
  [52.904670717924851, -1.231211708121378],
  [52.904656442042757, -1.231228315264284],
  [52.904642156552612, -1.23124343578239],
  [52.904627866257748, -1.231257812983833],
  [52.904583188063803, -1.231299489713693],
  [52.904527317489638, -1.231348054806282],
  [52.904509776469823, -1.23136032764601],
  [52.904510330641202, -1.231362479622612],
  [52.904530614264722, -1.231440920247935],
  [52.904540277825603, -1.231475688703602],
  [52.904554546035683, -1.231527473736661],
  [52.904574747940536, -1.231593278320597],
  [52.904572890126076, -1.231597920187961],
  [52.904579056757512, -1.231633250091253],
  [52.90415218300403, -1.231967051149071],
  [52.903950100013688, -1.232033333587129],
  [52.903862607341779, -1.231775358615531],
  [52.903774154913634, -1.231511536402251],
  [52.903719901229991, -1.231351183041264],
  [52.903664689462325, -1.231265184539867],
  [52.903636667045348, -1.231119058423555],
  [52.903630733590433, -1.231088118576307],
  [52.903552318171322, -1.230917043190408],
  [52.903536431605822, -1.230891544118778],
  [52.903524455606004, -1.230872324269525],
  [52.903499178244168, -1.230831752276845],
  [52.90321282825861, -1.230409383294948],
  [52.903205546132391, -1.230395388252039],
  [52.90319871342794, -1.230381385256133],
  [52.903190097452935, -1.230369643941784],
  [52.903184661098301, -1.230363049899261],
  [52.903176968009802, -1.230355009084778],
  [52.903168385690655, -1.23034847075236],
  [52.903160257602913, -1.230342667745795],
  [52.903151699325107, -1.23033984582458],
  [52.903144498934161, -1.230338486592284],
  [52.90313326815793, -1.230339428826574],
  [52.903122950653575, -1.230342584986429],
  [52.903118470844795, -1.230344894409359],
  [52.903109520843728, -1.230350999814878],
  [52.903101025073973, -1.230357840540324],
  [52.903098347766701, -1.230360861409258],
  [52.903088542191696, -1.2303736722459],
  [52.903079659502481, -1.230390183561675],
  [52.903077001426524, -1.230396177547083],
  [52.903071245466158, -1.230409660032877],
  [52.903065494312109, -1.230423885794884],
  [52.903062442226812, -1.23042969942435],
  [52.903056339452519, -1.23045043733464],
  [52.903047599361905, -1.230532362183604],
  [52.903033237514045, -1.230613921163858],
  [52.903020112298918, -1.230669441944415],
  [52.902986867114151, -1.230697906508428],
  [52.90296672524277, -1.230667599267549],
  [52.902957968107586, -1.230616648055388],
  [52.902955074953631, -1.230429929306217],
  [52.902947240531724, -1.230347926415863],
  [52.90290408368859, -1.230277327829348],
  [52.902860907566861, -1.230203756278129],
  [52.902823631619675, -1.230139000697944],
  [52.90280496958372, -1.230102906573138],
  [52.902794058364876, -1.230083772472058],
  [52.902784041179636, -1.230063879183937],
  [52.902774458983778, -1.230041748119687],
  [52.902765780440966, -1.230020344417168],
  [52.90276211289796, -1.230009258989715],
  [52.902755222421682, -1.229986336904383],
  [52.902750129634491, -1.229963382978743],
  [52.902746868212304, -1.22994560012977],
  [52.902744321053902, -1.229927061269649],
  [52.902743950368993, -1.22991145728869],
  [52.902745197606166, -1.229895824642651],
  [52.90274734368802, -1.229880176070205],
  [52.902750838037882, -1.229864503607433],
  [52.902755240855264, -1.229850301764772],
  [52.902760996752527, -1.229836819304032],
  [52.902761455798881, -1.229838297889788],
  [52.902769874553705, -1.229819564723048],
  [52.902778728293626, -1.229798593761129],
  [52.902788045888784, -1.229779844651637],
  [52.902799151550362, -1.229759577127805],
  [52.902810271644761, -1.229741539419559],
  [52.902822749630857, -1.229724964359868],
  [52.902835681850213, -1.229709124601818],
  [52.902874923105948, -1.229660854029473],
  [52.902895877557917, -1.229634464984269],
  [52.902915937970135, -1.229608835121907],
  [52.902949795730606, -1.229562146518301],
  [52.902967154773528, -1.22953582111096],
  [52.902984504183287, -1.229508009126064],
  [52.903026790225432, -1.229444073577314],
  [52.903058367103071, -1.229392221608597],
  [52.903083265198248, -1.229350151730067],
  [52.903085034003844, -1.229345660176999],
  [52.903086788365336, -1.229338938783672],
  [52.903088088488481, -1.229331482078335],
  [52.903095105928919, -1.229304596497576],
  [52.903098600201986, -1.229288923863467],
  [52.903107386434975, -1.229257546710486],
  [52.903113997773055, -1.229237358599335],
  [52.903128587970755, -1.229199931571494],
  [52.903144985481063, -1.229163959199222],
  [52.903162740882038, -1.229129449450283],
  [52.903181399935498, -1.229095667012657],
  [52.903215644298911, -1.229039307084246],
  [52.903225348283947, -1.229024713626786],
  [52.903235231073104, -1.229009968317561],
  [52.903255267263127, -1.228980621552168],
  [52.903290883926687, -1.22892795393562],
  [52.903310045336568, -1.228902339459466],
  [52.903330110404752, -1.228877452298105],
  [52.903353306976904, -1.228850279445302],
  [52.90337741202481, -1.22882457718536],
  [52.903402884608731, -1.228801824115502],
  [52.903429719912161, -1.228781276952986],
  [52.903456569666666, -1.228762959623543],
  [52.903484782142847, -1.228746848207159],
  [52.903548895467743, -1.228721922612783],
  [52.903562798675054, -1.228717215660072],
  [52.903575788579928, -1.228710294789781],
  [52.903588324242527, -1.228702638602057],
  [52.903601294871621, -1.228692744568601],
  [52.903612912411546, -1.228682131166564],
  [52.903623621466394, -1.228670047131801],
  [52.903639235623125, -1.22865192904418],
  [52.903653482231093, -1.228630861713098],
  [52.903681965796771, -1.228587240429351],
  [52.90370377547363, -1.228554144807006],
  [52.90372467665518, -1.228519578524135],
  [52.903741566758264, -1.228490287042634],
  [52.903757548367366, -1.228459524911249],
  [52.903771746736979, -1.228431024544195],
  [52.903785526013301, -1.228402635671148],
  [52.903785826718156, -1.228401597038382],
  [52.903786292476241, -1.228400919730405],
  [52.903793904559322, -1.2283823116664],
  [52.903802767682599, -1.228362826501376],
  [52.903806314859338, -1.228355329749993],
  [52.903809412612475, -1.22834784097632],
  [52.903812051300129, -1.228338873596174],
  [52.903812542398128, -1.228331431099147],
  [52.903815665395683, -1.228315083783838],
  [52.903721456129446, -1.228135588188179],
  [52.90370296579664, -1.228100142325574],
  [52.90367937210582, -1.228057351887266],
  [52.903647574888318, -1.228005880365692],
  [52.903621153292804, -1.227960354095359],
  [52.903600395583581, -1.227921695659094],
  [52.903587544075052, -1.227889401333944],
  [52.903570006264047, -1.227827455332108],
  [52.903561549453052, -1.227779750157089],
  [52.903555053277074, -1.227731082434398],
  [52.903551209170786, -1.227701415800943],
  [52.903544041736069, -1.227679241957757],
  [52.903533784963066, -1.227657123017699],
  [52.903520127354504, -1.227630418440491],
  [52.903505618468451, -1.227602334440782],
  [52.90349286338742, -1.227584906013519],
  [52.903476717421832, -1.227564286347919],
  [52.903449510743506, -1.227527601270849],
  [52.90343672548827, -1.227505527352745],
  [52.903424813510789, -1.227488083996548],
  [52.903400500165816, -1.22746435657311],
  [52.903362649825446, -1.227432506872887],
  [52.903329040412906, -1.227404762554837],
  [52.903312941785998, -1.2273915758847],
  [52.903291217212931, -1.227377094669373],
  [52.903263188473311, -1.227343675971732],
  [52.903251255357695, -1.227322981612039],
  [52.903241297960321, -1.227303645212238],
  [52.903225715838417, -1.227283479606943],
  [52.903211264204131, -1.227264223127332],
  [52.903193954496004, -1.227237583800669],
  [52.903172365505291, -1.227200799283696],
  [52.903157596307572, -1.227175973251428],
  [52.903136007297874, -1.2271391887959],
  [52.903118737687969, -1.227118587957015],
  [52.903103173642258, -1.227101209774394],
  [52.903088731037336, -1.227083347802225],
  [52.903072596148718, -1.227064585242147],
  [52.903056138572964, -1.22703932547802],
  [52.903022782349218, -1.227007396473212],
  [52.902996563498967, -1.226992995473056],
  [52.902962304042248, -1.226994997819154],
  [52.902930941014276, -1.22701042284468],
  [52.902911384398521, -1.227027032435265],
  [52.902890791742678, -1.227057133129354],
  [52.902869540048187, -1.227115585436177],
  [52.902840674780037, -1.227212735662652],
  [52.902827617536182, -1.227278477241734],
  [52.902807314447287, -1.227353174248772],
  [52.902781740327448, -1.227438186076896],
  [52.902766031727133, -1.227484925277382],
  [52.902745544517153, -1.227531284025392],
  [52.902708387900823, -1.227606280260211],
  [52.9026753566799, -1.22766773043744],
  [52.902657602909187, -1.2277024262084],
  [52.902638133637282, -1.227732506444369],
  [52.90261860405122, -1.227753295757332],
  [52.90260313748783, -1.227750782956854],
  [52.902584287290438, -1.227746471882218],
  [52.902564540596742, -1.227733813978864],
  [52.902542794949845, -1.227716080286446],
  [52.902520200161, -1.227697433991146],
  [52.902498435516023, -1.227676913089815],
  [52.9024864361119, -1.227645999045997],
  [52.902489061037521, -1.227617611243878],
  [52.90249614098478, -1.227583105252504],
  [52.9025073894759, -1.227541556954939],
  [52.902507442354633, -1.227541393963706],
  [52.902507443997898, -1.227541370147126],
  [52.902524193907716, -1.227490524283011],
  [52.902539996684133, -1.22743226165294],
  [52.902558418739304, -1.227362058719485],
  [52.902575951561339, -1.227293358247559],
  [52.902598867764794, -1.227223075295518],
  [52.902619976577363, -1.227151337690225],
  [52.902655148176478, -1.227030288316125],
  [52.902664823000535, -1.226997408503839],
  [52.902670080855856, -1.226976500964915],
  [52.902677107422427, -1.226951101813662],
  [52.902689430464804, -1.226910741279388],
  [52.902703580165884, -1.226874808384592],
  [52.902720349109366, -1.226826935128855],
  [52.902737949249982, -1.226768640016832],
  [52.902748455213818, -1.226725338261349],
  [52.902756866760782, -1.226677910932412],
  [52.902757482467422, -1.226648165585071],
  [52.902752743743456, -1.226624462385485],
  [52.902737152183647, -1.226590693937602],
  [52.90273250138933, -1.22658051833176],
  [52.90272884802225, -1.226571663026703],
  [52.902729570008006, -1.226558269711418],
  [52.902733897040555, -1.226546298964326],
  [52.902738373881512, -1.22652971672012],
  [52.902755465494408, -1.226503840999349],
  [52.902760968753107, -1.226493038683594],
  [52.902771144077029, -1.226481855876903],
  [52.902777435999056, -1.226481743905674],
  [52.9027828773999, -1.226489080672993],
  [52.902792941574084, -1.226502282060154],
  [52.902814658847525, -1.226524196412977],
  [52.902835398990192, -1.226534085724356],
  [52.902869497151684, -1.226524558610571],
  [52.902899785368618, -1.226495920534299],
  [52.902921035825749, -1.226459860959049],
  [52.902952643271284, -1.226385259480026],
  [52.902978875961338, -1.226313578344796],
  [52.903009104979418, -1.226192912619675],
  [52.90302427972626, -1.226093477652774],
  [52.903035126446319, -1.226005864847572],
  [52.903045140992766, -1.225928525252435],
  [52.903051825067088, -1.225878154748833],
  [52.903061830823908, -1.225799477193255],
  [52.903073729997409, -1.225735484504757],
  [52.903091022210937, -1.225671395704427],
  [52.903103264605896, -1.225632522586077],
  [52.903119924774494, -1.225581825551404],
  [52.903141061619209, -1.225514545976342],
  [52.903161280223692, -1.225444309231336],
  [52.903191235795944, -1.225323201239328],
  [52.903201782712785, -1.225272464271978],
  [52.903214184415788, -1.225230465956605],
  [52.903226574636797, -1.225200510382153],
  [52.903239952612239, -1.225170388508642],
  [52.903253379957178, -1.225147848093887],
  [52.903272103550137, -1.22511034587157],
  [52.903288928904281, -1.225071242048287],
  [52.903305867199855, -1.225021877684608],
  [52.903322704937764, -1.224970879662161],
  [52.903335059078756, -1.224921596966646],
  [52.90334462580936, -1.224872215278098],
  [52.903347141036967, -1.224830541702534],
  [52.90334615772948, -1.224803797919616],
  [52.903346001781131, -1.224779864187313],
  [52.903348611139577, -1.224766436987216],
  [52.903356507014713, -1.224736561350205],
  [52.90336089838577, -1.224727870335349],
  [52.903370631676339, -1.224686540764809],
  [52.903382165631697, -1.224645913504206],
  [52.903397179248678, -1.224621951477304],
  [52.903411706769603, -1.224609612536036],
  [52.903434963493467, -1.224600369365678],
  [52.903465589056765, -1.224601217577355],
  [52.903496021977688, -1.224615542111093],
  [52.903528811002552, -1.22464655052906],
  [52.903558613618024, -1.224693408955134],
  [52.903578904430766, -1.224746476274259],
  [52.903607430298528, -1.224856080557453],
  [52.903633067580827, -1.224953655162749],
  [52.903649719281361, -1.225008647505428],
  [52.903665129383391, -1.225045541507093],
  [52.903677071975814, -1.22506762984363],
  [52.903699591528792, -1.225074662098259],
  [52.90372732133978, -1.225062087833652],
  [52.903752583215478, -1.225058849766952],
  [52.90377311490851, -1.225062664451975],
  [52.903793097834999, -1.225068348855455],
  [52.903808332422635, -1.225078298680078],
  [52.903824732927482, -1.225094732283705],
  [52.903844510152304, -1.225112034921638],
  [52.90386170142957, -1.225120555310545],
  [52.903885024767227, -1.225121534079036],
  [52.903902131324905, -1.225117046848686],
  [52.903917290271103, -1.225115383498194],
  [52.903945379194091, -1.225114882721514],
  [52.903979403548554, -1.225119851481428],
  [52.904010107764407, -1.225132777123976],
  [52.904029915239065, -1.225154725448425],
  [52.904041024674278, -1.22517822343639],
  [52.904049327334242, -1.225202235341234],
  [52.904063931460996, -1.225244719483112],
  [52.904073387915538, -1.225273356987149],
  [52.904080836238066, -1.225295525699359],
  [52.904126941192004, -1.22542138238122],
  [52.904159443092333, -1.225384297057432],
  [52.904198848913524, -1.225347763621749],
  [52.904248267860282, -1.225330379666566],
  [52.904291601894464, -1.225331094073257],
  [52.904341185392248, -1.225338982286021],
  [52.904447672718938, -1.225360724081319],
  [52.904515281519359, -1.225375724992813],
  [52.904570357649199, -1.225385002183937],
  [52.904607387309042, -1.22539772327154],
  [52.904648059774559, -1.22541766470278],
  [52.904694135955673, -1.225439145334255],
  [52.904724123644307, -1.225447234279549],
  [52.904753795223492, -1.225448192286178],
  [52.904788801805886, -1.22544013448218],
  [52.904814781219009, -1.225426290382062],
  [52.904832632306416, -1.225406643964929],
  [52.904845080638722, -1.225385607031394],
  [52.904858389095502, -1.225358607588774],
  [52.904877873306681, -1.22531365654489],
  [52.904900073397755, -1.225271630635223],
  [52.904933011213586, -1.22522197929727],
  [52.904975904078817, -1.225182557978975],
  [52.905037604908365, -1.225132393682429],
  [52.905090404406671, -1.225095769148153],
  [52.905125343182085, -1.225077304597272],
  [52.905155768361332, -1.225055946891529],
  [52.905183564784053, -1.225045043648959],
  [52.905206905712582, -1.225040167052702],
  [52.905216812377873, -1.225042964016726],
  [52.905223133345061, -1.225047311721747],
  [52.905241244605314, -1.225067618203111],
  [52.905262051580209, -1.225070498853918],
  [52.905289705736415, -1.225046310540114],
  [52.905331857266553, -1.225048346711425],
  [52.905360788400436, -1.225047830848224],
  [52.905428987414886, -1.225037786121157],
  [52.905473920605907, -1.225035591771839],
  [52.905519705087968, -1.225034775383057],
  [52.905561926364967, -1.225030268318248],
  [52.905572706698074, -1.22502918400133],
  [52.905597845314752, -1.225024275295271],
  [52.905651688876844, -1.225009933815162],
  [52.905691150912695, -1.224995848752525],
  [52.905743138674445, -1.224972619366394],
  [52.905785229449002, -1.224948079596276],
  [52.90583624087526, -1.224912972911243],
  [52.905846968907078, -1.224903860632058],
  [52.905876441934346, -1.224874341879298],
  [52.905881801106005, -1.224869042404197],
  [52.905893398922288, -1.224855454109857],
  [52.905919242654761, -1.224820796126807],
  [52.905935276572592, -1.224798207710569],
  [52.905975288693369, -1.224730586667743],
  [52.905994268226969, -1.224690995772137],
  [52.906075196124803, -1.224749620136694],
  [52.906169140979394, -1.224819312495912],
  [52.906174582481242, -1.22482664962257],
  [52.90620677878767, -1.224852930623741],
  [52.906217782491666, -1.22490338053757],
  [52.906226339003098, -1.22493544178056],
  [52.906235603896043, -1.224961847849724],
  [52.906245842282971, -1.224984656261106],
  [52.906266094533741, -1.22503168813074],
  [52.906383612004163, -1.225304658720755],
  [52.906417829866271, -1.225425784214249],
  [52.906472704948349, -1.225612984517535],
  [52.90621182224681, -1.225851903667692],
  [52.906293275213088, -1.226101877539899],
  [52.906328316017216, -1.226209644345707],
  [52.906357310266117, -1.226299974219189],
  [52.906448379930161, -1.226577433949632],
  [52.906462745002038, -1.226616133685081],
  [52.906485433536716, -1.226676839359508],
  [52.906504267658043, -1.226725421523695],
  [52.906334617383934, -1.226902400599351],
  [52.906296228809396, -1.226943376865757],
  [52.906264000720107, -1.226977850073661],
  [52.906156849217311, -1.22707521083078],
  [52.90611572221276, -1.226957590219769],
  [52.906040685649828, -1.226740211913389],
  [52.905961674440604, -1.226506103919405],
  [52.905880101531658, -1.22626520297579],
  [52.905873227735547, -1.226244955828723],
  [52.90584252370617, -1.226154360074069],
  [52.905779160122684, -1.22622536898564],
  [52.905688170103993, -1.226333445273045],
  [52.905641782010967, -1.226388391233848],
  [52.905582611926903, -1.226454567021393],
  [52.905484774030278, -1.226574063976832],
  [52.905465854766625, -1.226595364712477],
  [52.905428820356839, -1.226637208413572],
  [52.90540713495254, -1.226661680615504],
  [52.905343001709376, -1.226738797672855],
  [52.905293228725732, -1.226798560757976],
  [52.905301186838969, -1.226819680516589],
  [52.905308526383379, -1.226842446774569],
  [52.90538100922182, -1.227068044471944],
  [52.905452567684442, -1.227289793641789],
  [52.905443553066348, -1.227299766870459],
  [52.905298259750097, -1.227462330407228],
  [52.905163289549044, -1.227608800613643],
  [52.905174347988883, -1.227636704651085],
  [52.905221879284611, -1.227757777895286],
  [52.905299554742619, -1.227952656206631],
  [52.905397332396191, -1.228197729746207],
  [52.905437656172559, -1.228302577268365],
  [52.905446747595519, -1.228332152074407],
  [52.905473625866705, -1.22840140635286],
  [52.905494287826663, -1.228454713485857],
  [52.905601187835032, -1.228720442786521],
  [52.905621084488189, -1.228808257973071],
  [52.905622009352086, -1.228812255969378],
  [52.90563103443796, -1.22885879974875],
  [52.905762546419616, -1.22865067224818],
  [52.905770525192558, -1.228633432180361],
  [52.906026310380021, -1.228292125046712],
  [52.906028179635101, -1.228289266875527],
  [52.906054803443375, -1.22824998780315],
  [52.906159912474578, -1.228100924564227],
  [52.906282863169061, -1.227930727888561],
  [52.906281774906773, -1.227929260381253],
  [52.906274706025272, -1.227920464919786],
  [52.906391422432357, -1.22775929911969],
  [52.906423872199646, -1.227821409397063],
  [52.906464267533707, -1.227763952121552],
  [52.906534607592327, -1.227659663624921],
  [52.906561324932014, -1.227620976781063],
  [52.906594234764583, -1.227566865264283],
  [52.906683211963468, -1.227425519544991],
  [52.906700714887165, -1.22747680225344],
  [52.906708412880107, -1.227499414296087],
  [52.90671895230917, -1.227530450916043],
  [52.906815453442384, -1.227744924887596],
  [52.906839806754093, -1.227799059877755],
  [52.906930646778775, -1.228000105149685],
  [52.906932379666557, -1.228003940209579],
  [52.907021391758413, -1.228200409513611],
  [52.907054589993919, -1.228273865898656],
  [52.907110077734252, -1.228402089449047],
  [52.907121667584178, -1.228428796003536],
  [52.907153150159992, -1.228501093692011],
  [52.907178626321972, -1.228548221297923],
];

function ConservationAreas() {
  const { loading, error, data } = useQuery(CONVERSATION_AREAS);

  useEffect(() => {
    console.log("602");
    console.log(data);
  }, [data]);

  return (
    <div>
      <Polyline color="lime" fillOpacity="1" weight="5" positions={polyline} />
    </div>
  );
}

export default ConservationAreas;
// const { loading, error, data } = useQuery(CONVERSATION_AREAS);
//
// useEffect(() => {
//   console.log("602");
//   console.log(data);
// }, [data]);
