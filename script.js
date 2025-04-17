// this is the worst code i have ever written
var guessNum = 0;
var winstreak = 0;
var canReset = false;
var gameFrozen = false;
var towerInfo = {

  // Ring 1
  "toast": ["ToAST", 0, "Ring 1", "Tower", 0],
  "toa": ["ToA", 0, "Ring 1", "Tower", 0],
  "tom": ["ToM", 1, "Ring 1", "Tower", 0],
  "toh": ["ToH", 2, "Ring 1", "Tower", 0],
  "tok": ["ToK", 2, "Ring 1", "Tower", 0],
  "toky": ["ToKY", 3, "Ring 1", "Tower", 0],
  "tos": ["ToS", 4, "Ring 1", "Tower", 0],
  "tosp": ["ToSP", 4, "Ring 1", "Tower", 0],
  "tor": ["ToR", 4, "Ring 1", "Tower", 0],
  "toie": ["ToIE", 5, "Ring 1", "Tower", 0],
  "tots": ["ToTS", 6, "Ring 1", "Tower", 0],
  "tt": ["TT", 7, "Ring 1", "Tower", 0],
  "cols": ["CoLS", 5, "Ring 1", "Citadel", 2],

  // Ring 2
  "tops": ["ToPS", 1, "Ring 2", "Tower", 0],
  "tobh": ["ToBH", 2, "Ring 2", "Tower", 0],
  "tooh": ["ToOH", 2, "Ring 2", "Tower", 0],
  "toch": ["ToCH", 3, "Ring 2", "Tower", 0],
  "tofaf": ["ToFaF", 4, "Ring 2", "Tower", 0],
  "tot": ["ToT", 4, "Ring 2", "Tower", 0],
  "todd": ["ToDD", 4, "Ring 2", "Tower", 2],
  "tosd": ["ToSD", 4, "Ring 2", "Tower", 0],
  "totf": ["ToTF", 5, "Ring 2", "Tower", 0],
  "toes": ["ToES", 6, "Ring 2", "Tower", 0],
  "todc": ["ToDC", 7, "Ring 2", "Tower", 0],
  "cows": ["CoWS", 6, "Ring 2", "Citadel", 3],

  // Ring 3
  "toft": ["ToFT", 0, "Ring 3", "Tower", 0],
  "toic": ["ToIC", 1, "Ring 3", "Tower", 0],
  "toat": ["ToAT", 1, "Ring 3", "Tower", 0],
  "tods": ["ToDS", 1, "Ring 3", "Tower", 0],
  "tof": ["ToF", 2, "Ring 3", "Tower", 0],
  "tower": ["ToWER", 2, "Ring 3", "Tower", 0],
  "tosi": ["ToSI", 3, "Ring 3", "Tower", 0],
  "towh": ["ToWH", 3, "Ring 3", "Tower", 0],
  "told": ["ToLD", 3, "Ring 3", "Tower", 0],
  "tod": ["ToD", 4, "Ring 3", "Tower", 0],
  "toc": ["ToC", 7, "Ring 3", "Tower", 0],
  "cohad": ["CoHaD", 5, "Ring 3", "Citadel", 5],

  // Ring 4
  "tosh": ["ToSH", 0, "Ring 4", "Tower", 0],
  "togg": ["ToGG", 1, "Ring 4", "Tower", 0],
  "totm": ["ToTM", 2, "Ring 4", "Tower", 0],
  "toe": ["ToE", 2, "Ring 4", "Tower", 0],
  "tol": ["ToL", 3, "Ring 4", "Tower", 0],
  "toll": ["ToLL", 3, "Ring 4", "Tower", 0],
  "todad": ["ToDaD", 4, "Ring 4", "Tower", 0],
  "too": ["ToO", 5, "Ring 4", "Tower", 4],
  "tohf": ["ToHF", 5, "Ring 4", "Tower", 0],
  "tonp": ["ToNP", 6, "Ring 4", "Tower", 0],
  "tocn": ["ToCN", 6, "Ring 4", "Tower", 0],
  "toi": ["ToI", 9, "Ring 4", "Tower", 1],
  "cou": ["CoU", 5, "Ring 4", "Citadel", 1],

  // Ring 5
  "tonv": ["ToNV", 1, "Ring 5", "Tower", 0],
  "togkd": ["ToGKD", 2, "Ring 5", "Tower", 0],
  "tors": ["ToRS", 3, "Ring 5", "Tower", 0],
  "todm": ["ToDM", 4, "Ring 5", "Tower", 0],
  "tooc": ["ToOC", 4, "Ring 5", "Tower", 0],
  "toff": ["ToFF", 5, "Ring 5", "Tower", 0],
  "toea": ["ToEA", 5, "Ring 5", "Tower", 0],
  "toth": ["ToTH", 5, "Ring 5", "Tower", 0],
  "togah": ["ToGaH", 6, "Ring 5", "Tower", 0],
  "tofo": ["ToFO", 6, "Ring 5", "Tower", 0],
  "toib": ["ToIB", 7, "Ring 5", "Tower", 0],
  "tofn": ["ToFN", 9, "Ring 5", "Tower", 0],
  "cocr": ["CoCR", 6, "Ring 5", "Citadel", 1],

  // Ring 6
  "tofj": ["ToFJ", 2, "Ring 6", "Tower", 0],
  "toep": ["ToEP", 3, "Ring 6", "Tower", 0],
  "torr": ["ToRR", 3, "Ring 6", "Tower", 0],
  "toti": ["ToTI", 4, "Ring 6", "Tower", 0],
  "toadf": ["ToADF", 5, "Ring 6", "Tower", 0],
  "toisc": ["ToISC", 5, "Ring 6", "Tower", 0],
  "todr": ["ToDR", 5, "Ring 6", "Tower", 0],
  "tofs": ["ToFS", 5, "Ring 6", "Tower", 0],
  "ton": ["ToN", 6, "Ring 6", "Tower", 0],
  "tosm": ["ToSM", 8, "Ring 6", "Tower", 2],
  "toim": ["ToIM", 9, "Ring 6", "Tower", 0],
  "cosr": ["CoSR", 6, "Ring 6", "Citadel", 2],

  // Ring 7
  "torb": ["ToRB", 3, "Ring 7", "Tower", 0],
  "tofl": ["ToFL", 4, "Ring 7", "Tower", 1],
  "tocc": ["ToCC", 4, "Ring 7", "Tower", 1],
  "toda": ["ToDA", 4, "Ring 7", "Tower", 0],
  "toooo": ["ToOOO", 5, "Ring 7", "Tower", 0],
  "tongue": ["ToNGUE", 5, "Ring 7", "Tower", 1],
  "toned": ["ToNED", 6, "Ring 7", "Tower", 1],
  "tou": ["ToU", 6, "Ring 7", "Tower", 1],
  "toyv": ["ToYV", 6, "Ring 7", "Tower", 0],
  "toeh": ["ToEH", 7, "Ring 7", "Tower", 1],
  "totb": ["ToTB", 8, "Ring 7", "Tower", 0],
  "toer": ["ToER", 10, "Ring 7", "Tower", 2],
  "cote": ["CoTE", 6, "Ring 7", "Citadel", 3],

  // Ring 8
  "tosss": ["ToSSS", 1, "Ring 8", "Tower", 0],
  "tonba": ["ToNBA", 2, "Ring 8", "Tower", 0],
  "tovf": ["ToVF", 4, "Ring 8", "Tower", 0],
  "tova": ["ToVA", 4, "Ring 8", "Tower", 1],
  "toaa": ["ToAA", 4, "Ring 8", "Tower", 0],
  "tous": ["ToUS", 5, "Ring 8", "Tower", 1],
  "toiii": ["ToIII", 5, "Ring 8", "Tower", 2],
  "tomt": ["ToMT", 6, "Ring 8", "Tower", 1],
  "tove": ["ToVE", 6, "Ring 8", "Tower", 0],
  "toso": ["ToSO", 8, "Ring 8", "Tower", 1],
  "toei": ["ToEI", 8, "Ring 8", "Tower", 1],
  "togf": ["ToGF", 10, "Ring 8", "Tower", 2],
  "cochs": ["CoCHS", 5, "Ring 8", "Citadel", 2],

  // Ring 9
  "togo": ["ToGO", 5, "Ring 9", "Tower", 0],
  "toqt": ["ToQT", 6, "Ring 9", "Tower", 0],
  "tobbb": ["ToBBB", 6, "Ring 9", "Tower", 0],
  "topp": ["ToPP", 6, "Ring 9", "Tower", 1],
  "toha": ["ToHA", 7, "Ring 9", "Tower", 0],
  "tobt": ["ToBT", 7, "Ring 9", "Tower", 0],
  "toca": ["ToCA", 7, "Ring 9", "Tower", 0],
  "tofact": ["ToFaCT", 7, "Ring 9", "Tower", 1],
  "tobk": ["ToBK", 8, "Ring 9", "Tower", 0],
  "tons": ["ToNS", 9, "Ring 9", "Tower", 2],
  "toam": ["ToAM", 10, "Ring 9", "Tower", 2],
  "tocr": ["ToCR", 10, "Ring 9", "Tower", 0],
  "tocp": ["ToCP", 10, "Ring 9", "Tower", 3],
  "col": ["CoL", 6, "Ring 9", "Citadel", 1],

  // Zone 1
  "tozd": ["ToZD", 0, "Zone 1", "Tower", 0],
  "tophat": ["ToPHaT", 0, "Zone 1", "Tower", 0],
  "toad": ["ToAD", 1, "Zone 1", "Tower", 0],
  "top": ["ToP", 2, "Zone 1", "Tower", 0],
  "tohs": ["ToHS", 2, "Zone 1", "Tower", 0],
  "tomh": ["ToMH", 2, "Zone 1", "Tower", 0],
  "toco": ["ToCO", 3, "Zone 1", "Tower", 0],
  "toys": ["ToYS", 3, "Zone 1", "Tower", 1],
  "toav": ["ToAV", 4, "Zone 1", "Tower", 0],
  "towel": ["ToWEL", 4, "Zone 1", "Tower", 2],
  "tout": ["ToUT", 5, "Zone 1", "Tower", 0],
  "toed": ["ToED", 6, "Zone 1", "Tower", 0],
  "torni": ["ToRNI", 6, "Zone 1", "Tower", 2],
  "toz": ["ToZ", 6, "Zone 1", "Tower", 1],
  "totl": ["ToTL", 7, "Zone 1", "Tower", 0],
  "cop": ["CoP", 6, "Zone 1", "Citadel", 1],

  // Zone 2
  "tob": ["ToB", 1, "Zone 2", "Tower", 0],
  "tosa": ["ToSA", 1, "Zone 2", "Tower", 0],
  "togla": ["ToGLA", 2, "Zone 2", "Tower", 0],
  "tota": ["ToTA", 2, "Zone 2", "Tower", 0],
  "toud": ["ToUD", 3, "Zone 2", "Tower", 0],
  "todac": ["ToDaC", 4, "Zone 2", "Tower", 0],
  "topf": ["ToPF", 4, "Zone 2", "Tower", 0],
  "tosas": ["ToSaS", 4, "Zone 2", "Tower", 1],
  "toee": ["ToEE", 5, "Zone 2", "Tower", 0],
  "toaz": ["ToAZ", 5, "Zone 2", "Tower", 0],
  "tott": ["ToTT", 5, "Zone 2", "Tower", 0],
  "togd": ["ToGD", 6, "Zone 2", "Tower", 3],
  "tocm": ["ToCM", 6, "Zone 2", "Tower", 1],
  "todt": ["ToDT", 7, "Zone 2", "Tower", 1],
  "cogs": ["CoGS", 5, "Zone 2", "Citadel", 1],

  // Zone 3
  "tosfu": ["ToSFU", 0, "Zone 3", "Tower", 0],
  "tood": ["ToOD", 0, "Zone 3", "Tower", 0],
  "tobb": ["ToBB", 1, "Zone 3", "Tower", 0],
  "tocof": ["ToCOF", 1, "Zone 3", "Tower", 0],
  "toccc": ["ToCCC", 2, "Zone 3", "Tower", 0],
  "tox": ["ToX", 2, "Zone 3", "Tower", 0],
  "todh": ["ToDH", 3, "Zone 3", "Tower", 0],
  "toma": ["ToMA", 3, "Zone 3", "Tower", 0],
  "tocas": ["ToCaS", 3, "Zone 3", "Tower", 0],
  "torch": ["ToRCH", 3, "Zone 3", "Tower", 0],
  "tomc": ["ToMC", 4, "Zone 3", "Tower", 0],
  "toio": ["ToIO", 5, "Zone 3", "Tower", 0],
  "toqc": ["ToQC", 5, "Zone 3", "Tower", 1],
  "tocaup": ["ToCaUP", 5, "Zone 3", "Tower", 1],
  "tohh": ["ToHH", 8, "Zone 3", "Tower", 0],
  "cots": ["CoTS", 3, "Zone 3", "Citadel", 0],

  // Zone 4
  "tofsc": ["ToFSC", 0, "Zone 4", "Tower", 0],
  "toac": ["ToAC", 1, "Zone 4", "Tower", 0],
  "tofast": ["ToFaST", 2, "Zone 4", "Tower", 0],
  "touid": ["ToUID", 2, "Zone 4", "Tower", 0],
  "toww": ["ToWW", 3, "Zone 4", "Tower", 1],
  "toet": ["ToET", 3, "Zone 4", "Tower", 1],
  "topc": ["ToPC", 4, "Zone 4", "Tower", 0],
  "tomim": ["ToMIM", 5, "Zone 4", "Tower", 1],
  "toss": ["ToSS", 5, "Zone 4", "Tower", 1],
  "toddd": ["ToDDD", 6, "Zone 4", "Tower", 0],
  "tofg": ["ToFG", 6, "Zone 4", "Tower", 0],
  "totv": ["ToTV", 6, "Zone 4", "Tower", 0],
  "toif": ["ToIF", 7, "Zone 4", "Tower", 0],
  "toaaa": ["ToAAA", 8, "Zone 4", "Tower", 2],
  "coq": ["CoQ", 6, "Zone 4", "Citadel", 1],

  // Zone 5
  "tost": ["ToST", 2, "Zone 5", "Tower", 1],
  "tossss": ["ToSSSS", 2, "Zone 5", "Tower", 0],
  "tofv": ["ToFV", 3, "Zone 5", "Tower", 0],
  "tobs": ["ToBS", 3, "Zone 5", "Tower", 0],
  "tosts": ["ToSTS", 4, "Zone 5", "Tower", 0],
  "toue": ["ToUE", 4, "Zone 5", "Tower", 1],
  "tohk": ["ToHK", 5, "Zone 5", "Tower", 0],
  "tohe": ["ToHE", 5, "Zone 5", "Tower", 0],
  "togt": ["ToGT", 5, "Zone 5", "Tower", 3],
  "toao": ["ToAO", 5, "Zone 5", "Tower", 0],
  "tobabt": ["ToBaBT", 6, "Zone 5", "Tower", 1],
  "toza": ["ToZA", 6, "Zone 5", "Tower", 0],
  "topz": ["ToPZ", 7, "Zone 5", "Tower", 1],
  "toar": ["ToAR", 9, "Zone 5", "Tower", 0],
  "coce": ["CoCE", 5, "Zone 5", "Citadel", 1],

  // Zone 6
  "tofd": ["ToFD", 2, "Zone 6", "Tower", 0],
  "torc": ["ToRC", 3, "Zone 6", "Tower", 0],
  "tocf": ["ToCF", 4, "Zone 6", "Tower", 0],
  "tobibi": ["ToBIBI", 4, "Zone 6", "Tower", 1],
  "toas": ["ToAS", 4, "Zone 6", "Tower", 1],
  "tohm": ["ToHM", 4, "Zone 6", "Tower", 1],
  "tohl": ["ToHL", 5, "Zone 6", "Tower", 0],
  "tow": ["ToW", 5, "Zone 6", "Tower", 0],
  "toaf": ["ToAF", 6, "Zone 6", "Tower", 0],
  "tomo": ["ToMO", 6, "Zone 6", "Tower", 0],
  "tobc": ["ToBC", 6, "Zone 6", "Tower", 0],
  "totda": ["ToTDA", 8, "Zone 6", "Tower", 0],
  "tomm": ["ToMM", 9, "Zone 6", "Tower", 1],
  "cotaw": ["CoTaW", 5, "Zone 6", "Citadel", 2],

  // Zone 7
  "toj": ["ToJ", 1, "Zone 7", "Tower", 0],
  "tosv": ["ToSV", 2, "Zone 7", "Tower", 0],
  "torw": ["ToRW", 2, "Zone 7", "Tower", 0],
  "tobr": ["ToBR", 3, "Zone 7", "Tower", 0],
  "todf": ["ToDF", 3, "Zone 7", "Tower", 0],
  "toce": ["ToCE", 4, "Zone 7", "Tower", 0],
  "togm": ["ToGM", 4, "Zone 7", "Tower", 0],
  "tows": ["ToWS", 4, "Zone 7", "Tower", 0],
  "toy": ["ToY", 5, "Zone 7", "Tower", 0],
  "tocmc": ["ToCMC", 5, "Zone 7", "Tower", 0],
  "tosaps": ["ToSaPS", 5, "Zone 7", "Tower", 1],
  "toui": ["ToUI", 6, "Zone 7", "Tower", 1],
  "tofm": ["ToFM", 8, "Zone 7", "Tower", 0],
  "toua": ["ToUA", 9, "Zone 7", "Tower", 1],
  "coact": ["CoACT", 6, "Zone 7", "Citadel", 1],

  // Zone 8
  "tomit": ["ToMIT", 2, "Zone 8", "Tower", 0],
  "toct": ["ToCT", 2, "Zone 8", "Tower", 0],
  "toatd": ["ToATD", 3, "Zone 8", "Tower", 0],
  "toxm": ["ToXM", 3, "Zone 8", "Tower", 0],
  "togv": ["ToGV", 4, "Zone 8", "Tower", 0],
  "tofr": ["ToFR", 4, "Zone 8", "Tower", 1],
  "toon": ["ToON", 5, "Zone 8", "Tower", 0],
  "tonef": ["ToNEF", 5, "Zone 8", "Tower", 0],
  "toml": ["ToML", 5, "Zone 8", "Tower", 0],
  "toov": ["ToOV", 6, "Zone 8", "Tower", 0],
  "totasm": ["ToTaSM", 6, "Zone 8", "Tower", 1],
  "tonr": ["ToNR", 6, "Zone 8", "Tower", 0],
  "torer": ["ToRER", 7, "Zone 8", "Tower", 0],
  "toae": ["ToAE", 8, "Zone 8", "Tower", 0],
  "todie": ["ToDIE", 10, "Zone 8", "Tower", 0],
  "cope": ["CoPE", 6, "Zone 8", "Citadel", 3],

  // Zone 9
  "todtd": ["ToDTD", 3, "Zone 9", "Tower", 0],
  "tols": ["ToLS", 4, "Zone 9", "Tower", 1],
  "toabcd": ["ToABCD", 4, "Zone 9", "Tower", 0],
  "tobl": ["ToBL", 4, "Zone 9", "Tower", 0],
  "tosrd": ["ToSRD", 5, "Zone 9", "Tower", 0],
  "tofu": ["ToFU", 5, "Zone 9", "Tower", 0],
  "tonn": ["ToNN", 5, "Zone 9", "Tower", 3],
  "tofcb": ["ToFCB", 5, "Zone 9", "Tower", 1],
  "toec": ["ToEC", 6, "Zone 9", "Tower", 0],
  "tomf": ["ToMF", 6, "Zone 9", "Tower", 1],
  "tobbbb": ["ToBBBB", 6, "Zone 9", "Tower", 0],
  "tovite": ["ToVITE", 6, "Zone 9", "Tower", 1],
  "tohr": ["ToHR", 7, "Zone 9", "Tower", 0],
  "topb": ["ToPB", 7, "Zone 9", "Tower", 1],
  "towww": ["ToWWW", 9, "Zone 9", "Tower", 0],
  "toemp": ["ToEMP", 10, "Zone 9", "Tower", 0],
  "coic": ["CoIC", 6, "Zone 9", "Citadel", 2],

  // FR
  "somd": ["SoMD", 0, "FR", "Steeple", 0],
  "tojgf": ["ToJGF", 0, "FR", "Tower", 0],
  "sop": ["SoP", 1, "FR", "Steeple", 0],
  "solw": ["SoLW", 2, "FR", "Steeple", 0],
  "sour": ["SoUR", 2, "FR", "Steeple", 0],
  "toii": ["ToII", 3, "FR", "Tower", 0],
  "tov": ["ToV", 3, "FR", "Tower", 0],
  "sowp": ["SoWP", 3, "FR", "Steeple", 0],
  "totc": ["ToTC", 4, "FR", "Tower", 0],
  "soc": ["SoC", 4, "FR", "Steeple", 0],
  "sohp": ["SoHP", 5, "FR", "Steeple", 0],
  "tois": ["ToIS", 5, "FR", "Tower", 0],
  "tode": ["ToDE", 5, "FR", "Tower", 0],
  "sotp": ["SoTP", 6, "FR", "Steeple", 0],
  "tomb": ["ToMB", 7, "FR", "Tower", 0],
  "cown": ["CoWN", 5, "FR", "Citadel", 1],

  // GoE
  "sobj": ["SoBJ", 0, "GoE", "Steeple", 0],
  "sods": ["SoDS", 0, "GoE", "Steeple", 0],
  "soif": ["SoIF", 1, "GoE", "Steeple", 0],
  "soo": ["SoO", 1, "GoE", "Steeple", 0],
  "son": ["SoN", 1, "GoE", "Steeple", 0],
  "sooa": ["SoOA", 2, "GoE", "Steeple", 0],
  "sogp": ["SoGP", 2, "GoE", "Steeple", 0],
  "soliq": ["SoLIQ", 2, "GoE", "Steeple", 0],
  "soff": ["SoFF", 2, "GoE", "Steeple", 0],
  "sovv": ["SoVV", 3, "GoE", "Steeple", 0],
  "sofw": ["SoFW", 4, "GoE", "Steeple", 0],
  "soba": ["SoBA", 5, "GoE", "Steeple", 0],
  "topa": ["ToPA", 5, "GoE", "Tower", 0],

  // LR
  "toew": ["ToEW", 1, "LR", "Tower", 0],
  "totst": ["ToTST", 2, "LR", "Tower", 0],
  "toloz": ["ToLOZ", 3, "LR", "Tower", 0],
  "todl": ["ToDL", 4, "LR", "Tower", 0],
  "tooo": ["ToOO", 4, "LR", "Tower", 0],
  "towaw": ["ToWaW", 5, "LR", "Tower", 0],
  "tocs": ["ToCS", 5, "LR", "Tower", 1],
  "totj": ["ToTJ", 6, "LR", "Tower", 0],
  "totem": ["ToTEM", 6, "LR", "Tower", 1],
  "touh": ["ToUH", 7, "LR", "Tower", 0],
  "cois": ["CoIS", 3, "LR", "Citadel", 1],
  
  // SA
  "soris": ["SoRIS", 3, "SA", "Steeple", 0],
  "sora": ["SoRA", 3, "SA", "Steeple", 0],
  "toai": ["ToAI", 3, "SA", "Tower", 1],
  "sod": ["SoD", 4, "SA", "Steeple", 0],
  "totint": ["ToTINT", 4, "SA", "Tower", 1],
  "sogl": ["SoGL", 4, "SA", "Steeple", 0],
  "soxa": ["SoXA", 4, "SA", "Steeple", 0],
  "sowg": ["SoWG", 5, "SA", "Steeple", 0],
  "tosw": ["ToSW", 5, "SA", "Tower", 0],
  "soii": ["SoII", 5, "SA", "Steeple", 0],
  "totd": ["ToTD", 5, "SA", "Tower", 0],
  "soma": ["SoMA", 6, "SA", "Steeple", 0],
  "somb": ["SoMB", 6, "SA", "Steeple", 0],

  // AT
  "tofz": ["ToFZ", 1, "AT", "Tower", 0],
  "tovt": ["ToVT", 2, "AT", "Tower", 0],
  "tocwc": ["ToCWC", 3, "AT", "Tower", 0],
  "towmt": ["ToWMT", 4, "AT", "Tower", 0],
  "towia": ["ToWIA", 5, "AT", "Tower", 0],
  "towow": ["ToWoW", 5, "AT", "Tower", 0],
  "tosr": ["ToSR", 5, "AT", "Tower", 0],
  "tolll": ["ToLLL", 5, "AT", "Tower", 1],
  "tofsf": ["ToFSF", 6, "AT", "Tower", 0],
  "tocb": ["ToCB", 6, "AT", "Tower", 0],
  "tomd": ["ToMD", 6, "AT", "Tower", 1],
  "torh": ["ToRH", 6, "AT", "Tower", 0],
  "towf": ["ToWF", 8, "AT", "Tower", 0],

  // PA
  "somm": ["SoMM", 0, "PA", "Steeple", 0],
  "soau": ["SoAU", 2, "PA", "Steeple", 0],
  "sosis": ["SoSIS", 3, "PA", "Steeple", 0],
  "soar": ["SoAR", 3, "PA", "Steeple", 0],
  "sodi": ["SoDI", 4, "PA", "Steeple", 0],
  "sohs": ["SoHS", 4, "PA", "Steeple", 0],
  "toci": ["ToCI", 4, "PA", "Tower", 0],
  "socf": ["SoCF", 4, "PA", "Steeple", 0],
  "souc": ["SoUC", 4, "PA", "Steeple", 0],
  "tottt": ["ToTTT", 4, "PA", "Tower", 0],
  "soub": ["SoUB", 5, "PA", "Steeple", 0],
  "sodd": ["SoDD", 5, "PA", "Steeple", 0],

  // AA
  "sobt": ["SoBT", 1, "AA", "Steeple", 0],
  "soas": ["SoAS", 1, "AA", "Steeple", 0],
  "soro": ["SoRO", 2, "AA", "Steeple", 0],
  "soap": ["SoAP", 2, "AA", "Steeple", 0],
  "sotc": ["SoTC", 3, "AA", "Steeple", 0],
  "some": ["SoME", 3, "AA", "Steeple", 0],
  "soca": ["SoCA", 4, "AA", "Steeple", 0],
  "sowc": ["SoWC", 4, "AA", "Steeple", 0],
  "somc": ["SoMC", 5, "AA", "Steeple", 1],
  "toia": ["ToIA", 5, "AA", "Tower", 2],

  // PoM
  "tomdc": ["ToMDC", 0, "PoM", "Tower", 0]
}
var PoMSCInfo = {
  "toxic": ["ToXIC", 9, "PoM", "Tower", 0],
  "toolc": ["ToOLC", 9, "PoM", "Tower", 4],
  "tovm": ["ToVM", 10, "PoM", "Tower", 2],
  "tose": ["ToSE", 10, "PoM", "Tower", 3],
  "tovh": ["ToVH", 11, "PoM", "Tower", 0],
  "towm": ["ToWM", 11, "PoM", "Tower", 1],
  "toev": ["ToEV", 11, "PoM", "Tower", 3],
  "totrp": ["ToTRP", 11, "PoM", "Tower", 0],
  "tobf": ["ToBF", 12, "PoM", "Tower", 3],
  "tosf": ["ToSF", 12, "PoM", "Tower", 2],
  "coiv": ["CoIV", 12, "PoM", "Citadel", 5]
}
var miniInfo = {
  "neat": ["NEAT", 0, "Ring 1", "Mini-Tower", 0],
  "mat": ["MAT", 0, "Ring 2", "Mini-Tower", 0],
  "pat": ["PAT", 0, "PA", "Mini-Tower", 0],
  "lat": ["LAT", 3, "Ring 5", "Mini-Tower", 0],
  "wbat": ["WBAT", 4, "Ring 4", "Mini-Tower", 0],
  "tat": ["LAT", 5, "Ring 3", "Mini-Tower", 0],
  "fnat": ["LAT", 5, "Ring 6", "Mini-Tower", 0]
}
var PoMMiniInfo = {
  "wat": ["WAT", 10, "PoM", "Mini-Tower", 0]
}
var SoFMInfo = {
  "sofm": ["SoFM", 1, "FR", "Steeple", 0]
}
var newTowerInfo = {...towerInfo};
var answerIndex = Date.now() % Object.keys(towerInfo).length;
var difficulties = ["Easy", "Medium", "Hard", "Difficult", "Challenging", "Intense", "Remorseless", "Insane", "Extreme", "Terrifying", "Catastrophic", "Horrific", "Unreal"];
var lengths = ["Regular (<20m)", "Long (20-30m)", "Very Long (30-45m)", "Extremely Long (45-60m)", "Ridiculously Long (60-90m)", "Inhumanely Long (90+m)"];
var areaInfo = {
  "Ring 1": [0, 1, 0],
  "Ring 2": [0, 2, 0],
  "Ring 3": [0, 3, 0],
  "Ring 4": [0, 4, 0],
  "Ring 5": [0, 5, 0],
  "Ring 6": [0, 6, 0],
  "Ring 7": [0, 7, 0],
  "Ring 8": [0, 8, 0],
  "Ring 9": [0, 9, 0],
  "Zone 1": [1, 1, 0],
  "Zone 2": [1, 2, 0],
  "Zone 3": [1, 3, 0],
  "Zone 4": [1, 4, 0],
  "Zone 5": [1, 5, 0],
  "Zone 6": [1, 6, 0],
  "Zone 7": [1, 7, 0],
  "Zone 8": [1, 8, 0],
  "Zone 9": [1, 9, 0],
  "FR": [0, 1, 1],
  "GoE": [0, 2, 1],
  "LR": [0, 5, 1],
  "SA": [0, 5, 2],
  "AT": [0, 6, 1],
  "PA": [1, 1, 1],
  "AA": [1, 2, 1],
  "PoM": [1, 3, 1]
}
function modifyTable(row, column, text) {
  var guessTable = document.getElementById("guesses");
  var guessRow = guessTable.getElementsByTagName("tr")[row + 1];
  var guessColumn = guessRow.getElementsByTagName("td")[column];
  guessColumn.innerHTML = text;
}
function areaCategoryTest(a, b) {
  var aCategory = 0;
  var bCategory = 0;
  if (a.slice(0, 4) == "Ring") {aCategory = 1;}
  if (a.slice(0, 4) == "Zone") {aCategory = 2;}
  if (b.slice(0, 4) == "Ring") {bCategory = 1;}
  if (b.slice(0, 4) == "Zone") {bCategory = 2;}
  if (aCategory == bCategory) {
    return true;
  }
  return false;
}
function extendArray(a, e) {
  var k = Object.keys(e);
  for (i = 0; i < k.length; i++) {
    a[k[i]] = e[k[i]];
  }
  return a;
}
function getWinstreakMessage(w) {
  if (w == 0) {
    return "";
  }
  return " (Winstreak: " + w + ")";
}
function setCanReset(newValue) {
  canReset = newValue;
  if (canReset) {
    document.getElementById("resetbutton").innerHTML = "Reset"
  } else {
    document.getElementById("resetbutton").innerHTML = "Reset and lose winstreak"
  }
}
function submit() {
  if (gameFrozen) {
    return;
  }
  setCanReset(false);
  var input = document.getElementById("towerinput").value;
  var towerData = newTowerInfo[input.toLowerCase()];
  if (typeof(towerData) !== "undefined") {
    var answerData = newTowerInfo[Object.keys(newTowerInfo)[answerIndex]];
    var towerAreaInfo = areaInfo[towerData[2]];
    var answerAreaInfo = areaInfo[answerData[2]];
    
    document.getElementById("towerinput").value = "";
  
    if (towerData[0] == answerData[0]) {
      document.getElementById("feedback").innerHTML = "You won! The answer was " + answerData[0] + getWinstreakMessage(winstreak);
      setCanReset(true);
      gameFrozen = true;
      modifyTable(guessNum, 0, towerData[0] + " 🏆");
      modifyTable(guessNum, 1, difficulties[towerData[1]] + " 🏆");
      modifyTable(guessNum, 2, towerData[2] + " 🏆");
      modifyTable(guessNum, 3, towerData[3] + " 🏆");
      modifyTable(guessNum, 4, lengths[towerData[4]] + " 🏆");
      return;
    }
    
    // Name
    if (towerData[0].length < answerData[0].length) {
      modifyTable(guessNum, 0, towerData[0] + " 🔼");
    } else if (towerData[0].length > answerData[0].length) {
      modifyTable(guessNum, 0, towerData[0] + " 🔽");
    } else {
      modifyTable(guessNum, 0, towerData[0] + " 🟩");
    }

    // Difficulty
    if (towerData[1] < answerData[1]) {
      modifyTable(guessNum, 1, difficulties[towerData[1]] + " 🔼");
    } else if (towerData[1] > answerData[1]) {
      modifyTable(guessNum, 1, difficulties[towerData[1]] + " 🔽");
    } else {
      modifyTable(guessNum, 1, difficulties[towerData[1]] + " 🟩");
    }

    // Area
    if (towerAreaInfo == answerAreaInfo) {
      modifyTable(guessNum, 2, towerData[2] + " 🟩");
    }
    if (towerAreaInfo[0] == answerAreaInfo[0] && towerAreaInfo[1] < answerAreaInfo[1]) {
      modifyTable(guessNum, 2, towerData[2] + " 🔼");
    }
    if (towerAreaInfo[0] == answerAreaInfo[0] && towerAreaInfo[1] > answerAreaInfo[1]) {
      modifyTable(guessNum, 2, towerData[2] + " 🔽");
    }
    if (towerAreaInfo[0] == answerAreaInfo[0] && towerAreaInfo[1] == answerAreaInfo[1] && towerAreaInfo[2] !== answerAreaInfo[2]) {
      modifyTable(guessNum, 2, towerData[2] + " 🔄");
    }
    if (towerAreaInfo[0] !== answerAreaInfo[0]) {
      modifyTable(guessNum, 2, towerData[2] + " 🟥");
    }

    // Tower Type
    if (towerData[3] !== answerData[3]) {
      modifyTable(guessNum, 3, towerData[3] + " 🟥");
    } else {
      modifyTable(guessNum, 3, towerData[3] + " 🟩");
    }

    // Length
    if (towerData[4] < answerData[4]) {
      modifyTable(guessNum, 4, lengths[towerData[4]] + " 🔼");
    } else if (towerData[4] > answerData[4]) {
      modifyTable(guessNum, 4, lengths[towerData[4]] + " 🔽");
    } else {
      modifyTable(guessNum, 4, lengths[towerData[4]] + " 🟩");
    }
    
    guessNum++;
    if (guessNum == 6) {
      document.getElementById("feedback").innerHTML = "You lost! The answer was " + answerData[0] + getWinstreakMessage(winstreak);
      gameFrozen = true;
    } else {
      document.getElementById("feedback").innerHTML = guessNum + "/6 guesses" + getWinstreakMessage(winstreak);
    }
  }
}
function reset() {
  if (canReset) {
    winstreak += 1;
    setCanReset(false);
  } else {
    winstreak = 0;
  }
  gameFrozen = false;
  guessNum = 0;
  newTowerInfo = {...towerInfo};
  if (document.getElementById("includepom").checked) {
    newTowerInfo = extendArray(newTowerInfo, PoMSCInfo);
    if (document.getElementById("includemini").checked) {
      newTowerInfo = extendArray(newTowerInfo, PoMMiniInfo);
    }
  }
  if (document.getElementById("includemini").checked) {
    newTowerInfo = extendArray(newTowerInfo, miniInfo);
  }
  if (document.getElementById("includesofm").checked) {
    newTowerInfo = extendArray(newTowerInfo, SoFMInfo);
  }
  answerIndex = Date.now() % Object.keys(newTowerInfo).length;
  for (r = 0; r < 6; r++) {
    for (c = 0; c < 5; c++) {
      modifyTable(r, c, "&#x200B;");
    }
  }
  document.getElementById("feedback").innerHTML = "0/6 guesses" + getWinstreakMessage(winstreak);
  document.getElementById("towerinput").value = "";
}
function toggle() {
  document.body.classList.toggle("darkMode");
}
