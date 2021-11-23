//if anybody reads this, I am so terribly sorry for this code

const classes = ["scout", "soldier", "pyro", "demoman", "heavy", "engineer", "medic", "sniper", "spy"]

const scout = ["scattergun", "pistol", "bat"]
const soldier = ["rocket launcher", "shotgun", "banner", "pair of boots", "shovel", "mele"]
const pyro = ["flamethrower", "shotgun", "flare gun", "mele"]
const demoman = ["grenade launcher", "sticky bomb launcher", "sheild", "sword", "mele"]
const heavy = ["minigun", "shotgun", "lunchbox item", "mele"]
const engineer = ["shotgun", "pistol", "wrench"]
const medic = ["needle gun", "crossbow", "medi-gun", "mele"]
const sniper = ["sniper rifle", "smg", "mele"]
const spy = ["revolver", "knife", "mele"]

const percent_attributes = 
[
    "Movement Speed",
    "Max Health",
    "Jump Height",
    "Firing Speed",
    "Reload Speed",
    "Firing Cone Size",
    "Weapon Switch Speed"
]
const good_things = [
    "Bullet Damage Resistance",
    "Fire Damage Resistance",
    "Blast Damage Resistance",
    "Crit Damage Resistance",
    "Mini-Crit Damage Resistance",
    "decreased falloff",
    "inverted falloff",
    "All Mini-Crits Become Full Crits"
]
const bad_things = [
    "Bullet Damage Vurnuability",
    "Fire Damage Vurnuability",
    "Blast Damage Vurnuability",
    "Crit Damage Vurnuability",
    "Mini-crit Damage Vurnuability",
    "increased falloff",
    "All Crits Become mini-crits"
]
const percent_attribute_addons =
[
    "on Wearer",
    "while Deployed",
    "on Wearer",
    "while Deployed",
    "on Wearer",
    "while Deployed",
    "on Wearer",
    "while Deployed",
    "on Wearer",
    "while Deployed",
    "on Wearer",
    "while Deployed",
    "on Wearer",
    "while Deployed",
    "if Health is under 50%",
    "if Health is over 50%"
]


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const weapon_types = [scout, soldier, pyro, demoman, heavy, engineer, medic, sniper, spy];
function meleCheck(attr_to_add, weapontype)
{
    if(weapontype == "mele" ^ weapontype == "bat" ^ weapontype == "sword")
    {
        if(attr_to_add == "Reload Speed" ^ attr_to_add == "Firing Speed")
        {
            attr_to_add == "Swing Speed"
        }
    }
    return attr_to_add
}
function GenerateStat(isgood, weapontype)
{
    var random = getRandomInt(10)
    if(isgood)
    {
        if(random < 2)
        {
            attr_to_add = good_things[getRandomInt(good_things.length)]
        }else {
            attr_to_add = percent_attributes[getRandomInt(percent_attributes.length)]
        }
    }
    else{
        if(random < 2)
        {
            attr_to_add = bad_things[getRandomInt(bad_things.length)]
        }else{
            attr_to_add = percent_attributes[getRandomInt(percent_attributes.length)]
        }
    }
    if(getRandomInt == 10)
    {
        console.log("FUN TIMES AHEAD")
    }
    attr_to_add = meleCheck(attr_to_add, weapontype)
    return attr_to_add;
}

function randomWeapon()
{
    //Get OP level
    var select = document.getElementById('op');
    var value = select.options[select.selectedIndex].value;
    value = parseInt(value)

    var class_option = document.getElementById('classes');
    var class_option = class_option.selectedIndex;

    var slot_option = document.getElementById('slot');
    var slot_option = slot_option.selectedIndex;
    //select class and weapon type
    var class_id = getRandomInt(8)
    if(class_option != 0)
    {
        //override if user selected
        class_id = class_option - 1;
    }
    var class_weapontype = weapon_types[class_id]


    var goods = []

    //Changes Name & level
    var class_name = classes[class_id]
    var weapontype = class_weapontype[getRandomInt(class_weapontype.length)]
    document.getElementById("weapon-name").innerHTML = "A " + weapontype + " for the " + class_name
    document.getElementById("level").innerHTML = "level " + getRandomInt(37) + " " + weapontype

    //Reset Positive An Negitive Attributes
    document.getElementById("negative").innerHTML = ""
    document.getElementById("positive").innerHTML = ""

    //Checks if The weapon Needs special States
    if(weapontype != "lunchbox item" ^ weapontype != "sheild" ^ weapontype != "medi-gun")
    {
        //Finds out ammount of Positive And Negative Stats
        var positive_attr_count = (getRandomInt(5)) + value
        if(positive_attr_count < 0)
        {
            positive_attr_count = 0;
        }
        var neg_attr_count = (getRandomInt(5)) - value
        if(neg_attr_count < 0)
        {
            positive_attr_count = 0;
        }
        if(positive_attr_count == 0 && neg_attr_count == 0)
        {
            //failsafe
            positive_attr_count = 3
            neg_attr_count = 1
        }

        //Gets Attributes
        var attributes = [];
        for(let i = 0; i < positive_attr_count + neg_attr_count; i++)
        {
            var isgood = i < positive_attr_count;
            var attr_to_add = GenerateStat(isgood, weapontype)
            if(attributes.includes(attr_to_add))
            {
                attr_to_add = GenerateStat(isgood, weapontype)
            }
            if(attributes.includes(attr_to_add))
            {
                attr_to_add = GenerateStat(isgood, weapontype)
            }
            if(attributes.includes(attr_to_add))
            {
                attr_to_add = GenerateStat(isgood, weapontype)
            }
            attributes.push(attr_to_add)
            goods.push(isgood)
        }
        console.log(attributes) //log before formatting
        //------------------------------------------------------------Application and formatting of Attributes
        //most issues are born here
        for(let i = 0; goods[i] == true; i++)
        {
            if(percent_attributes.includes(attributes[i]))
            {
                //formatting
                if(attributes[i] == "Max Health")
                {
                    attributes[i] = "+ " + ((getRandomInt(15 + (value * 2)) + 1) * 5) + " " + attributes[i] + " " + percent_attribute_addons[getRandomInt(percent_attribute_addons.length)]
                }else if(attributes[i] == "Firing Cone Size")
                {
                    attributes[i] = "- " + ((getRandomInt(15 + (value * 2)) + 1) * 5) + " " + attributes[i] + " " + percent_attribute_addons[getRandomInt(percent_attribute_addons.length)]
                }
                else {
                    attributes[i] = "+ %" + ((getRandomInt(15 + (value * 2)) + 1) * 5) + " " + attributes[i] + " " + percent_attribute_addons[getRandomInt(percent_attribute_addons.length)]
                }
            }
            else if(good_things.includes(attributes[i]))
            {
                if(attributes[i] != "All Mini-Crits Become Full Crits" ^ attributes[i] == "decreased falloff")
                {
                    attributes[i] = "+ %" + ((getRandomInt(15 + (value * 2)) + 1) * 5) + " " + attributes[i]
                }
            }else {
                //Aw shit something messed up bro
                console.log("something doesnt feel right...")
                attributes[i] = "Internal Error (what how)"
            }
            //application
            document.getElementById("positive").innerHTML += attributes[i] + "<br>"
        }
        for(let i = positive_attr_count ; goods[i] == false; i++)
        {
            if(percent_attributes.includes(attributes[i]))
            {
                if(!attributes[i] == "Max Health")
                {
                    attributes[i] = "- " + ((getRandomInt(15 - (value * 2)) + 1) * 5) + " " + attributes[i] + " " + percent_attribute_addons[getRandomInt(percent_attribute_addons.length)]
                }else if(attributes[i] == "Firing Cone Size")
                {
                    attributes[i] = "+ " + ((getRandomInt(15 - (value * 2)) + 1) * 5) + " " + attributes[i] + " " + percent_attribute_addons[getRandomInt(percent_attribute_addons.length)]
                }
                else {
                    attributes[i] = "- %" + ((getRandomInt(15 - (value * 2)) + 1) * 5) + " " + attributes[i] + " " + percent_attribute_addons[getRandomInt(percent_attribute_addons.length)]
                }
            }else if(bad_things.includes(attributes[i]))
            {
                if(attributes[i] != "All Crits Become mini-crits" ^ attributes[i] == "increased falloff")
                {
                    attributes[i] = "+ %" + ((getRandomInt(15 - (value * 2)) + 1) * 5) + " " + attributes[i]
                }
            }
            document.getElementById("negative").innerHTML += attributes[i] + "<br>"
        }
        //debug stuff
        console.log(positive_attr_count)
        console.log(neg_attr_count)
        console.log(attributes) //log after formatting
        console.log(goods)
        console.log(weapontype)
        console.log(class_name)
    }
    else{
    }
    //My favorite tf2 source code comment in the leak is: "TODO: This is dumb" and that is exacty how I feel right now

    //Thoughts of Rubyboat:
    //1:08 AM 11/23/21 - Wow I just got daja vu lol and also I should probably sleep
}
