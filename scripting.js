//if anybody reads this, I am so terribly sorry for this code

const classes = ["scout", "soldier", "pyro", "demoman", "heavy", "engineer", "medic", "sniper", "spy"]

const scout = ["scattergun", "pistol", "bat"]
const soldier = ["rocket launcher", "shotgun", "banner", "pair of boots", "shovel"]
const pyro = ["flamethrower", "shotgun", "flare gun", "fire axe"]
const demoman = ["grenade launcher", "sticky bomb launcher", "sword", "bottle"]
const heavy = ["minigun", "shotgun", "mele"]
const engineer = ["shotgun", "pistol", "wrench"]
const medic = ["needle gun", "crossbow", "mele"]
const sniper = ["sniper rifle", "smg", "mele"]
const spy = ["revolver", "knife"]

const percent_attributes = 
[
    "Movement Speed",
    "Max Health",
    "Jump Height",
    "Firing Speed",
    "Reload Speed",
    "Random Bullet Spread",
    "Weapon Switch Speed",
    "Mid Air Movement Control",
    "Clip Size",
    "Ammo Pool"
]
const good_things = [
    "Bullet Damage Resistance",
    "Fire Damage Resistance",
    "Blast Damage Resistance",
    "Crit Damage Resistance",
    "Mini-Crit Damage Resistance",
    "decreased falloff",
    "inverted falloff",
    "All Mini-Crits Become Full Crits",
    "Extra Mid Air Jump",
    "Quiet Spin / Shot",
    "Weapon Has Infinite Ammo",
    "Deals Crits When Aimed At The Back",
    "Has a fixed Spread Pattern",
    "On Damage Deals Knockback"
]
const onKillAddon = [
    "Gibbs Player",
    "Creates Small Explosion that deals ",
    "Turns User Invisible for ",
    "Coats All Enimies within a 10m radius with jarate for ",
    "Coats All Enimies within a 10m radius with mad milk for ",
    "Gives Nearest Teammate crits for ",
    "Gives Crits on any weapon for ",
    "Gives Crits on this weapon for ",
    "Gets 3 additional double jumps for ",
    "Becomes Mini Crit Boosted for ",
    "Deals damage to anything connected by any kind of medi-beam",
    "Heals User by "
]
const bad_things = [
    "Bullet Damage Vurnuability",
    "Fire Damage Vurnuability",
    "Blast Damage Vurnuability",
    "Crit Damage Vurnuability",
    "Mini-crit Damage Vurnuability",
    "increased falloff",
    "All Crits Become mini-crits",
    "No Random Critical Hits"
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
const projectile_weapons = [
    "rocket launcher",
    "grenade launcher",
    "sticky bomb launcher"
]
const flame_thrower_addons = [
    "Airblast Cost",
    "Flame Travel Distance",
    "Flame Cost"
]
const sniper_rifle_addons = [
    "Zoom Level",
    "Charge Time",
    "On Headshot"
]


const projectile_addons = [
    "Projectile Speed",
    "Projectile Gravity",
    "Splash radius"
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const weapon_types = [scout, soldier, pyro, demoman, heavy, engineer, medic, sniper, spy];
const mele = ["bat", "shovel", "sword", "bottle", "fists", "wrench", "bonesaw", "mele", "knife"]
function meleCheck(attr_to_add, weapontype)
{
    if(mele.includes(weapontype))
    {
        console.log("IS MELE")
        if(attr_to_add == "Reload Speed" ^ attr_to_add == "Firing Speed" ^ attr_to_add == "Firing Cone Size")
        {
            attr_to_add == "Swing Speed"
        }
    }
    return attr_to_add
}
function GenerateStat(isgood, weapontype)
{
    var random = getRandomInt(10)
    var attr_to_add
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
    if(random >= 9)
    {
        attr_to_add = "line 113 had an error lol"
        var random2 = getRandomInt(1)
        if(random2 == 0)
        {
            if(projectile_weapons.includes(weapontype))
            {
                attr_to_add = projectile_addons[getRandomInt(projectile_addons.length)]
            }
            else if(weapontype == "flamethrower")
            {
                attr_to_add = flame_thrower_addons[getRandomInt(flame_thrower_addons.length)]
            }
            else if(weapontype == "sniper rifle")
            {
                attr_to_add = flame_thrower_addons[getRandomInt(flame_thrower_addons.length)]
            }else{
                console.log("SHOULD HAVE ON KILL")
                if(isgood)
                {
                    attr_to_add = "On Kill: " + GiveOnKill(getRandomInt(onKillAddon.length))
                }else{
                    attr_to_add = "-10 max health";
                }
            }
        }else{
            console.log("SHOULD HAVE ON KILL")
            if(isgood)
            {
                attr_to_add = "On Kill: " + GiveOnKill(getRandomInt(onKillAddon.length))
            }else{
                attr_to_add = "-10 max health";
            }
        }
    }
    attr_to_add = meleCheck(attr_to_add, weapontype)
    return attr_to_add;
}
function GiveOnKill(val)
{
    killstat = onKillAddon[val]
   if(killstat != "Gibbs Player" && killstat != "Deals damage to anything connected by any kind of medi-beam")
   {
        killstat += ((getRandomInt(3) + 1) * 5);
        if(killstat != "Creates Small Explosion that deals " && killstat != "Heals User by ")
        {
            killstat += " seconds"
        }
        else
        {
            killstat += " HP"
        }
   }
   return killstat
}



function randomWeapon()
{
    //Get OP level
    var select = document.getElementById('op');
    var value = select.options[select.selectedIndex].value;
    value = parseInt(value)

    var class_option = document.getElementById('classes');
    var class_option = class_option.selectedIndex;
    //select class and weapon type
    var class_id = getRandomInt(9)
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
    document.getElementById("image").src = "weapons/" + weapontype + ".png"
    //Reset Positive An Negitive Attributes
    document.getElementById("negative").innerHTML = ""
    document.getElementById("positive").innerHTML = ""

    //Checks if The weapon Needs special States
    if(weapontype != "lunchbox item" ^ weapontype != "sheild" ^ weapontype != "medi-gun")
    {
        //Finds out ammount of Positive And Negative Stats
        var positive_attr_count = (getRandomInt(5 + value)) 
        if(positive_attr_count <= 0)
        {
            positive_attr_count = 1;
        }
        var neg_attr_count = (getRandomInt(5 - value)) 
        if(neg_attr_count < 0)
        {
            neg_attr_count = 0;
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
                    attributes[i] = "+ " + ((getRandomInt(12 + (value * 3)) + 1) * 5) + " " + attributes[i] + " " + percent_attribute_addons[getRandomInt(percent_attribute_addons.length)]
                }else if(attributes[i] == "Random Bullet Spread")
                {
                    attributes[i] = "- " + ((getRandomInt(12 + (value * 3)) + 1) * 5) + " " + attributes[i] + " " + percent_attribute_addons[getRandomInt(percent_attribute_addons.length)]
                }
                else {
                    attributes[i] = "+ %" + ((getRandomInt(12 + (value * 3)) + 1) * 5) + " " + attributes[i] + " " + percent_attribute_addons[getRandomInt(percent_attribute_addons.length)]
                }
            }
            else if(good_things.includes(attributes[i]))
            {
                if(attributes[i] != "All Mini-Crits Become Full Crits" && attributes[i] == "decreased falloff" && attributes[i] == "Weapon Has Infinite Ammo")
                {
                    attributes[i] = "+ %" + ((getRandomInt(15 + (value * 2)) + 1) * 5) + " " + attributes[i]
                }
            }else if(flame_thrower_addons.includes(attributes[i]) ^ projectile_addons.includes(attributes[i]) ^ sniper_rifle_addons.includes(attributes[i])) 
            {
                if(attributes[i] == "On Headshot")
                {
                    attributes[i] += GiveOnKill((getRandomInt(onKillAddon.length)));
                }else{
                    attributes[i] = "+ " + ((getRandomInt(12 + (value * 3)) + 1) * 5) + " " + attributes[i] + " " + percent_attribute_addons[getRandomInt(percent_attribute_addons.length)]
                }
            }else {

            }
            //application
            document.getElementById("positive").innerHTML += attributes[i] + "<br>"
        }
        for(let i = positive_attr_count ; goods[i] == false; i++)
        {
            if(percent_attributes.includes(attributes[i]))
            {
                if(attributes[i] == "Max Health")
                {
                    attributes[i] = "- " + ((getRandomInt(12 - (value * 3)) + 1) * 5) + " " + attributes[i] + " " + percent_attribute_addons[getRandomInt(percent_attribute_addons.length)]
                }else if(attributes[i] == "Random Bullet Spread")
                {
                    attributes[i] = "+ " + ((getRandomInt(12 - (value * 3)) + 1) * 5) + " " + attributes[i] + " " + percent_attribute_addons[getRandomInt(percent_attribute_addons.length)]
                }
                else {
                    attributes[i] = "- %" + ((getRandomInt(12 - (value * 3)) + 1) * 5) + " " + attributes[i] + " " + percent_attribute_addons[getRandomInt(percent_attribute_addons.length)]
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
}
    //My favorite tf2 source code comment in the leak is: "TODO: This is dumb" and that is exacty how I feel right now

    //Thoughts of Rubyboat:
    //1:08 AM 11/23/21 - Wow I just got daja vu lol and also I should probably sleep
    //5:00 PM 11/24/2021 - This is much harder than I thought it would be