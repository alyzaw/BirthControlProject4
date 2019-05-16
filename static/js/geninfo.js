
// Hide all elements with class="grid_3 alpha", except for the one that matches the clickable image selected


var item_titles = ['Combination Pill', 'Progestin Pill', 'Hormonal IUD', 'Non Hormonal IUD', 'Ring', 'Shot', 'Patch', 'Implant'];
var item_fact1s = ['Combination pills have 2 hormones: estrogen and progestin. These are the most common type of birth control pill. You have to remember to take everyday.', 
'Progestin-only pills have 1 kind of hormone (progestin) — these pills don’t have any estrogen. You must take progestin-only pills within the same 3 hours every day to be protected from pregnancy.', 
'A hormonal IUD is a small piece of flexible plastic shaped like a T. The hormonal IUD releases a tiny amount of the hormone progestin into your body over several years.',
 'Non-hormonal IUDs use copper to prevent pregnancy. Sperm doesn’t like copper — it changes the way sperm cells move so they can’t swim to an egg. If sperm can’t make it to an egg, pregnancy can’t happen.', 
 'The birth control ring (AKA NuvaRing) is a safe, simple, and affordable birth control method that you wear inside your vagina. The small, flexible ring prevents pregnancy by releasing hormones into your body. ', 
 'The depo shot (AKA Depo-Provera) is an injection you get once every 3 months. It’s a safe, convenient, and private birth control method that works really well if you always get it on time.', 
 'The transdermal contraceptive patch is a safe, simple, and affordable birth control method that you wear on the skin of your belly, upper arm, butt, or back. It releases hormones that prevent pregnancy.', 
 'The birth control implant (AKA Nexplanon) is a tiny, thin rod about the size of a matchstick. The implant releases hormones into your body that prevent you from getting pregnant.'];

var item_fact2s = ['91%', '91%', '99%', '99%', '91%', '94%', '91%', '99%']; //effectivenss

// var item_fact4s = ['No', 'No', 'Yes', 'Yes', 'No', 'Yes', 'Yes', 'Yes'];
var item_fact3s = ['$0-$50', '$0-$50', '$0-$1000', '$0-$1000', '$0-$200', '$0-$100', '$0-$150', '$0-$1500']; //cost
var item_fact4s = ['Once Daily','Once Daily', 'Every 5 Years', 'Every 12 Years', 'Every Month', 'Every 3 Months', 'Every Week', 'Every 3 Years']; //shelflife
var item_fact5s = ['No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'Yes']; //procedure
var item_fact6s = ['2.56', '2.25', '3.23', '2.41', '2.79', '2.25', '2.95', '2.33']; //rating
// var item_fact3s = ['Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes']; //rx
// var item_fact7s = ['Not really', 'Yes', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes'];
// var item_fact8s = ['Yes', 'Yes', 'Yes', 'yes', 'Yes', 'Yes', 'Yes', 'Yes'];

// var item_fact10s = ['No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'];
// var item_fact11s = ['Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'No', 'Yes', 'Yes'];

var nextTab=0;
var open_tabs = ["", "", ""]; //currently open tabs

function closeTab(tabNumber) {
    document.getElementById("grid_"+tabNumber).style.display = "none";
    open_tabs[tabNumber-1] = "";
}

function openTab(tabName) {
    var matched = -1;
    for(var i=0;i<item_titles.length;i++) {
        if(item_titles[i] == tabName) {
            matched = i;
        }
    }

   // nextTab = (nextTab+1)%3;
    for(var i=0;i<open_tabs.length;i++) {
        if(open_tabs[i] == "") {
            available = i;
            break;
        }
    }
    

    // console.log("" + available + " " + matched);
   // if(available == -1 || matched == -1) {
       // alert("Please choose no more than 3 methods at a time");
    //}

    open_tabs[available] = item_titles[matched];
    var grid_id = available+1;

    document.getElementById("grid_"+grid_id).style.display = "inline-grid";
    document.getElementById("title_"+grid_id).innerHTML = item_titles[matched];
    document.getElementById("fact_"+grid_id+"_1").innerHTML = item_fact1s[matched];
    document.getElementById("fact_"+grid_id+"_2").innerHTML = item_fact2s[matched];
    document.getElementById("fact_"+grid_id+"_3").innerHTML = item_fact3s[matched];
    document.getElementById("fact_"+grid_id+"_4").innerHTML = item_fact4s[matched];
    document.getElementById("fact_"+grid_id+"_5").innerHTML = item_fact5s[matched];    
    document.getElementById("fact_"+grid_id+"_6").innerHTML = item_fact6s[matched];
    // document.getElementById("fact_"+grid_id+"_7").innerHTML = item_fact7s[matched];
    // document.getElementById("fact_"+grid_id+"_8").innerHTML = item_fact8s[matched];
    // document.getElementById("fact_"+grid_id+"_6").innerHTML = item_fact9s[matched];
    // document.getElementById("fact_"+grid_id+"_10").innerHTML = item_fact10s[matched];
    // document.getElementById("fact_"+grid_id+"_11").innerHTML = item_fact11s[matched];
    

    
}
