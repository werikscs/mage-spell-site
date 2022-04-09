export const dbSpells = [
  {
    "death":{
      "initiate":[
        {
          "id":1,
          "identity":{
            "name":"Carry on, my Wayward Son (Death •)",
            "author":"by Frishman "
          },
          "properties":{
            "practice":" Compelling",
            "primary factor":" Potency",
            "suggested rote skills":" Expression, Medicine, Crafts",
            "withstand":" Stamina"
          },
          "description":[
            "The willworker slowly seeps the vitality from a target. Against an awake and aware target, this spell has no effect, but against someone who is already tired and distracted, it causes the Drugged Condition for the Spell’s Duration."
          ]
        },
        {
          "id":2,
          "identity":{
            "name":"Death Perception (Death •, Life •)",
            "author":"by Dark Archon"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Potency",
            "suggested rote skills":" Crafts, Medicine, Brawl"
          },
          "description":[
            "Destruction is easy, if you know the structure of a target - attack its weak point for massive damage. You combine your knowledge of life and death to find the most weak point of a target - the pillar upon which its existence stands. If you successfully physically damage enemy in hit locations (arms, legs, head, heart, hands or foots) while this spell works, reduce Stamina of enemy by Potency for counting infliction of Tilt (for example, in you successfully strike your enemy with Stamina 4 in arm while this spell with Potency 2, he gets Arm Wrack Tilt on 3 or more damage)."
          ],
          "others":[
            {
              "+2 Reach":" Apply Potency of a spell to damage. You only get additional damage if you target and successfully strike an enemy in hit location with at least 1 point of damage. Type of damage does not change."
            }
          ]
        },
        {
          "id":3,
          "identity":{
            "name":"Discover the Reaper (Death •)",
            "author":"by Masa"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Duration",
            "suggested rote skills":" Medicine, Survival, Empathy"
          },
          "description":[
            "Contact with Death marks you, and the more you mess with the Reaper the more you wear it's scent. Assassins, gravediggers, emergency workers, war veterans, coroners... all of them wear their share. For the spell's Duration, the caster can focus his sight on a subject and measure the amount of contact with the death the target has. Most people have only a very minor death aura, but a veteran coroner's aura could be startling."
          ],
          "others":[
            {
              "+1 Reach":" You know if the death cloud is caused because the target is a killer. Also gives you a measure of how many people he has killed, one, a few, dozens, hundreds."
            }
          ]
        },
        {
          "id":4,
          "identity":{
            "name":"Executioner’s Sight (Death •)",
            "author":"by Menace"
          },
          "properties":{
            "practice":" Unveilling",
            "primary factor":" Duration",
            "suggested rote skills":" Crafts, Medicine, Empathy"
          },
          "description":[
            "The subject is able to see the inner flaws of any object or person. By studying something, the subject can subtract one point of Durability from something he studied during the spell’s Duration for each turn he spent observing the object. The maximum reduction is equal to the spell’s potency. When studying a person, each turn of observation allows the mage to reduce the target’s Defense by one point in the first turn of combat."
          ],
          "others":[
            {
              "+1 Reach":" The subject gains also 9-again on the first roll made to affect a subject he has spent at least one turn observing. "
            }
          ]
        },
        {
          "id":5,
          "identity":{
            "name":"Killer Instinct (Death •)",
            "author":"by Five Eyes"
          },
          "properties":{
            "practice":" Unveiling",
            "primary factor":" Duration",
            "suggested rote skills":" Medicine, Firearms, Survival"
          },
          "description":[
            "Everything dies, sooner or later. This spell allows a subject to assess how to best expedite that process. While it is in effect, when the subject focuses upon a person or object, an inkling akin to peripheral mage sight will emphasize any nearby objects or phenomena that threaten that target, with greater stress placed on more dangerous things. A subject might find that their gun feels lighter when trained upon a vampire, while a candle's flame pulses and roils with ill-concealed animosity towards the undead."
          ],
          "others":[
            {
              "+1 Reach":" The subject may take turns to aim hand-to-hand attacks. For each bonus die gained from aiming, an attack (ranged or melee) gains Armor-piercing (1), up to a maximum of (3)."
            },
            {
              "+1 Reach":" For each die gained from aiming, reduce the threshold for an attack (ranged or melee) to be considered an exceptional success by one, to a minimum of two successes."
            },
            {
              "+1 Reach":" Each action spent aiming grants Potency bonus dice, instead of one, up to the character's limit on bonus dice from aiming."
            },
            {
              "+1 Reach":" Increase the subject's limit on bonus dice from aiming (usually +3) by the Potency of the spell."
            },
            {
              "+1 Reach":" If the subject scores an exceptional success on an attack, one level of inflicted damage is upgraded one step (bashing to lethal, etc.)"
            },
            {
              "+1 Reach":" If the subject scores an exceptional success on an attack, the Armor rating or Durability of their target is reduced by 1 until they heal or are repaired."
            },
            {
              "+1 Reach":" While under the effects of this spell and using Active Death Sight, a subject is always considered as having spent the last two turns aiming prior to making an attack."
            }
          ]
        },
        {
          "id":6,
          "identity":{
            "name":"Revealing Shadows (Death •)",
            "author":"by Neros"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Duration",
            "suggested rote skills":" Occult, Athletics, Streetwise"
          },
          "description":[
            "Darkness and shadows are the places where strange and dangerous beings hide and hunt. But to a Moros, that very darkness can become the very thing that can turn the hunt around. Any shadow the subject looks upon reveals what it is hiding within."
          ],
          "others":[
            {
              "+1 Reach":" When staging a surprise attack from the shadows against the subject it gains a bonus equal to the spell’s potency to its roll to notice. "
            }
          ]
        },
        {
          "id":7,
          "identity":{
            "name":"Probing the Shadows (Death •)",
            "author":"by Tea Time"
          },
          "properties":{
            "practice":" Unveiling",
            "primary factor":" Duration",
            "suggested rote skills":" Investigation, Athletics, Larceny"
          },
          "description":[
            "The Mage switches off their visual sight in favor of sensing all shadows in the vicinity. They can determine the location and shape of all shadows within the Sensory Range. Within complete darkness the effect is much more pronounced. The Mage can sense the distribution of all darkness, with living and inanimate objects visible as solid white outlines. For many purposes, the spell negates the effects of Blinded Tilt when within full darkness. The Mage can still suffer the effects of Poor Light Tilt because of residual amounts of light. Within strongly illuminated areas the Mage suffers from the Blinded Tilt."
          ],
          "others":[
            {
              "+1 Reach":" The Mage receives both the usual and magical sensory input. She does not suffer the effects of either Poor Light or Blinded Tilts within bright areas."
            },
            {
              "+1 Reach":" All dark areas also carry tactile sensations, should the Mage pay attention. \t"
            }
          ]
        },
        {
          "id":8,
          "identity":{
            "name":"See the Cracks (Death •)",
            "author":"by Justin Sane"
          },
          "properties":{
            "practice":" Unveiling",
            "primary factor":" Potency",
            "withstand":" Resolve",
            "suggested rote skills":" Empathy, Investigation, Subterfuge"
          },
          "description":[
            "The caster intuits the target’s Vice, Integrity level, and the presence of any Integrity-related Conditions. Against mages, it reads Wisdom, any Wisdom related Conditions, and which (if any) are the target's inured spells."
          ],
          "others":[
            {
              "+1 Reach":" Knowledge of the target's psyche makes him easier to manipulate. The caster gains a bonus to appropriate Social rolls against the target equal to the spell's Potency. "
            }
          ]
        },
        {
          "id":9,
          "identity":{
            "name":"Sense Undead (Death •)",
            "author":"by Dark Archon"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Duration",
            "suggested rote skill":" ?"
          },
          "description":[
            "Ghosts aren't bound by physical obstacles, and naturally can't be seen or felt by human senses. This spell tells the mage, if something undead enters the area of the spell and gives the location of it."
          ],
          "others":[
            {
              "+1 Reach":" The mage knows the Rank and Influence of the ghost who is entering the area."
            },
            {
              "+1 Reach":" The mage knows the amount of dots in attributes of the ghost who is entering the area."
            }
          ]
        }
      ],
      "apprentice":[
        {
          "id":10,
          "identity":{
            "name":"Body Heat Camouflage (Death ••)"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Duration",
            "suggested rote skills":" Medicine, Science, Survival"
          },
          "description":[
            "The mage invites cold to surround the subject, distorting any heat they radiate. This leaves the subject invisible to any thermal imaging technologies or heat detecting abilities."
          ]
        },
        {
          "id":11,
          "identity":{
            "name":"Coldproof (Death ••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Shielding",
            "primary factor":" Duration",
            "suggested rote skills":" Medicine, Occult, Survival"
          },
          "description":[
            "The subject becomes immune to any damage caused by cold. Note that this only stops cold related damage, a blizzard may not harm you but its perception penalties would still apply, same with penalties for a slippery ice floor. Supernatural attempts to cause cold-related harm to the subject provoke a Clash of Wills."
          ]
        },
        {
          "id":12,
          "identity":{
            "name":"Buried Anchor (Death ••)",
            "author":"by rwknoll"
          },
          "properties":{
            "practice":" Shielding",
            "primary factor":" Duration",
            "suggested rote skills":" Occult, Survival, Subterfuge"
          },
          "description":[
            "When ghosts are formed, they develop intimate connections with people, places, or objects that held personal significance to them in their life. These Anchors protect ghosts from Essence bleed and provide sustenance. This spell wards one potential source of Essence, preventing the ghost from obtaining Essence from a specified Anchor for the Duration of this spell unless they succeed on a Clash of Wills."
          ]
        },
        {
          "id":13,
          "identity":{
            "name":"Bolster Soul (Death ••)",
            "author":"by Frishman"
          },
          "properties":{
            "practice":" Shielding",
            "primary factor":" Duration",
            "withstand":" None",
            "suggested rote skills":" Medicine, Occult, Empathy"
          },
          "description":[
            "The caster wards a target's soul against iniquity, allowing him to better weather the slings and arrows of this world. For the spell's Duration, the target gains the 9-again quality on any degeneration roll he makes as a result of reaching a breaking point."
          ],
          "others":[
            {
              "+1 Reach":" The target instead gains the 8-again quality."
            }
          ]
        },
        {
          "id":14,
          "identity":{
            "name":"Corpse Marionette (Death ••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "withstand":" Resolve",
            "suggested rote skills":" Expression, Intimidation, Occult"
          },
          "description":[
            "The mage seizes control of the subject corpse, and can spend an instant action to manipulate it each turn as if it were an animate being. If the corpse’s vocal cords are intact, it can even be made to speak. The mage may choose to temporarily relinquish control of the corpse, allowing it to appear to return to its natural state - unless independently animate, it will fall to the floor if standing, etc"
          ],
          "others":[
            {
              "+1 Reach":" The mage may choose to temporarily relinquish control of a single part of the corpse - such as the mouth or hands, while maintaining control of the rest."
            },
            {
              "+1 Reach":" The target may be a corpse animated by Quicken Dead, or other similar effect. While under this effect, the subject cannot act independently with its physical body, unless control is relinquished as described above. If the corpse has been animated by a being other than a caster, controlling it calls for a Clash of Wills."
            }
          ]
        },
        {
          "id":15,
          "identity":{
            "name":"Mirror Mirror (Death ••)",
            "author":"by Frishman"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Duration",
            "withstand":" Resolve",
            "suggested rote skills":" Expression, Occult, Subterfuge"
          },
          "description":[
            "By wrapping a person's soul with a reflective coating, the Mage causes others to see a bit of themselves, potentially fooling them into thinking the subject is one of them. For the spell's Duration, any passive attempt to discern the nature of the target of this spell reveals him to be of the same type of being as the discerner. A Vampire would, for example, see his own Beast reflected in the target in passing and assume him to be another of the Damned. A Changeling would see his tatterdemalion soul reflected there, and perceive the subject with a facsimile of his own Mien. However, this spell does not grant the subject knowledge of what someone else is. If unprepared, he will be quite confused by the Changeling who has decided he is kin and wants to know all about his time in Arcadia. This spell only works on passive attempts to discern the subject's nature. Active attempts (such as through the use of Auspex) provoke a Clash of Wills."
          ]
        },
        {
          "id":16,
          "identity":{
            "name":"There’ll Be Peace When You Are Done (Death ••)"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "suggested rote skills":" Expression, Medicine, Crafts",
            "withstand":" Stamina"
          },
          "description":[
            "With greater understanding comes greater power, and now the Mage can affect even the awake and the aware. For the spell’s Duration, the target becomes subjected to the Drugged Condition. This spell does not work on targets who are currently experiencing an adrenaline rush, such as those in combat or who are already on edge."
          ]
        }
      ],
      "disciple":[
        {
          "id":17,
          "identity":{
            "name":"Black Light (Death •••, Forces •••)",
            "author":"by Neros"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "suggested rote skills":" Science, Brawl, Empathy"
          },
          "description":[
            "The targeted shadow gains the properties of an energy selected upon casting. The strength of the energy is determined by the Potency of the spell on the energy chart on p. 146. The shadow could shine like a flashlight, burn like a torch or emit sound as loud as a gun."
          ]
        },
        {
          "id":18,
          "identity":{
            "name":"Cryo-Phasing (Death •••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Occult, Empathy, Intimidation"
          },
          "description":[
            "This spell enhances any subject in Death-attuned Twilight to radiate cold into the material world. Every material object the subject phases through will find ice forming on it, this can cause surfaces to give the Ice Tilt. This is involuntary, the subject cannot choose to not freeze something."
          ],
          "others":[
            {
              "+1 Reach":" The subject has more control and may now choose to not freeze anything she doesn't desire to."
            },
            {
              "+1 Reach":" The subject may now choose to radiate even higher levels of cold than before. This can give the area around the subject the Extreme Cold Tilt for so long as he stays there."
            }
          ]
        },
        {
          "id":19,
          "identity":{
            "name":"Cursed Wounds (Death •••)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "suggested rote skills":" Weaponry, Occult, Medicine"
          },
          "description":[
            "The necromancer coats a weapon with venom of Death. For a number of attacks equal to Potency, wounds inflicted by the enchanted weapon are unable to be healed by natural healing or mundane medical attention. This includes any wound penalties, Personal Tilts, or Conditions tied to the wound. Supernatural healing works normally."
          ],
          "others":[
            {
              "+1 Reach":" The wound resists even magical healing, provoking a Clash of Wills."
            },
            {
              "+1 Reach":" The weapon, in lieu of wounds that do not heal, inflicts the Agony Tilt instantly."
            }
          ]
        },
        {
          "id":20,
          "identity":{
            "name":"Disperse Wounds (Death •••)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Fraying",
            "primary factor":" Potency",
            "suggested rote skills":" Medicine, Survival, Empathy"
          },
          "description":[
            "The necromancer calls forth entropy, but he may unwind it for those he favors. For each level of Potency, the mage may convert one point of lethal damage the subject suffers into two points of bashing damage. This spell does not work against lethal damage upgraded from accumulated bashing damage, including accumulation from this very spell. So, if a subject with 8 levels of Health had suffered 4 lethal damage, this spell may convert them into 1 lethal damage and 6 bashing damage at Potency 3, or 8 bashing damage at Potency 4. If that same subject had suffered 5 lethal damage instead, even at Potency 5 this spell would still leave him at 2 lethal damage and 6 bashing damage."
          ],
          "others":[
            {
              "+1 Reach":" The spell instead converts one point of lethal damage into one point of bashing damage per level of Potency."
            },
            {
              "+1 Reach and 1 Mana":" For one point of Mana, the spell instead converts one point of aggravated damage into two points of lethal damage instead. The limit concerning damage accumulation applies as normal."
            },
            {
              "Add Life ••":" The spell also heals any Tilts connected to the Health box affected, even if the box is technically uncleared and thus the Tilt should remain."
            },
            {
              "Add Time ••":" The spell may also heal scars and physical Conditions related to the healed wounds. With the Temporal Sympathy Attainment, the spell may force persistent Conditions caused from past injuries into transient Conditions, so that they naturally heal over time."
            }
          ]
        },
        {
          "id":21,
          "identity":{
            "name":"End Debate (Death •••)",
            "author":"by amechra"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "withstand":" Resolve",
            "suggested rote skills":" Expression, Persuasion, Socialize"
          },
          "description":[
            "Upon casting this spell, pick a topic - the spell 'kills' it, setting the target's impression level towards anyone who attempts to change their opinion on the topic through Social Maneuvering to Hostile. In addition, any Social Maneuvering attempt that brings up the topic causes the subject to immediately close a Door before the other character makes their roll. If the subject has an Aspiration related to the topic, they can't take Beats from that Aspiration for the Duration of the spell - if you spend one mana when casting the spell, this also applies to Oblations."
          ],
          "others":[
            {
              "+1 Reach":" The target also loses the drive to do anything about the 'killed' topic - any Extended Action they attempt related to the topic is treated like they have suffered a Dramatic Failure (which counts towards the number of rolls they may make)."
            },
            {
              "+1 Reach":" The target is immune to any attempt to change their stance on the topic - Supernatural powers instead trigger a Clash of Wills with this spell."
            }
          ]
        },
        {
          "id":22,
          "identity":{
            "name":"Ephemeral Touch (Death •••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Athletics, Expression, Occult"
          },
          "description":[
            "The caster grants the subject ghost the ability to interact with the Material world, even when in a Manifestation that would normally not allow such. The subject experiences physical sensation when interacting with the Material that matches what a Material being would experience under identical circumstances."
          ],
          "others":[
            {
              "+1 Reach":" The subject also gains the ability to perceive the material world clearly, even if not in a Manifestation that would normally allow them to do so."
            }
          ]
        },
        {
          "id":23,
          "identity":{
            "name":"Faces of Death (Death •••)",
            "author":"By Inodiv"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "withstand":" Stamina",
            "suggested rote skills":" Medicine, Stealth, Subterfuge"
          },
          "description":[
            "The mage may physically alter the subject corpse’s body in any way, within the confines of species and age. Rather than an illusion as with 'Corpse Mask', the transformation caused by this spell is entirely physical — subjects can be granted radically altered weight and fitness, and the apparent source of injuries, and nature of damage, may be altered, although they cannot be healed, and missing limbs cannot be regenerated."
          ],
          "others":[
            {
              "+1 Reach":" The target may be one of the ‘living’ dead instead of a simple corpse - a Revenant or Vampire, or other undead being. The mage may rearrange up to the spell’s Potency in Physical Attribute dots, for example moving a dot of Strength to Stamina, but cannot change the total number of dots, bring any to 0, or raise them above the subject’s limit."
            }
          ]
        },
        {
          "id":24,
          "identity":{
            "name":"Fracture Soul (Death •••)",
            "author":"by Frishman"
          },
          "properties":{
            "practice":" Fraying",
            "primary factor":" Potency",
            "withstand":" Resolve",
            "suggested rote skills":" Medicine, Occult, Empathy"
          },
          "description":[
            "The caster attacks a Sleeping soul without severing it, causing it to bend unnaturally. The target suffers the Soul Shocked condition for the spell's Duration."
          ]
        },
        {
          "id":25,
          "identity":{
            "name":"Fester the People (Death •••)",
            "author":"by Moinen"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "withstand":" Stamina"
          },
          "description":[
            "If you ever mess with a Death mage, remember to not be wounded, because if you are - better run, better run. With this spell the mage can bolster effects of the damage you received before. For the Duration of the spell, every point of Potency doubles the number of bashing wounds the target has but is not able to roll them over to lethals."
          ],
          "others":[
            {
              "+1 Reach":" Damage can now be rolled over and upgraded"
            },
            {
              "+2 Reach":" The spell can now double lethal damage"
            },
            {
              "+2 Reach and 1 Mana":" The spell can now double aggravated damage"
            }
          ]
        },
        {
          "id":26,
          "identity":{
            "name":"Freezing Slash (Death •••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Crafts, Science, Weaponry"
          },
          "description":[
            "Infusing a weapon with the ability to inflict biting cold to its targets, this spell increases a weapon’s weapon damage by Potency to a maximum of 5. It has no effect on creatures unaffected by extreme temperature lows."
          ],
          "others":[
            {
              "+1 Reach":" This spell may affect unarmed attacks and grapples. Without negatively harming the user with its cold."
            },
            {
              "+1 Reach":" The spell applies the Knocked Down Tilt."
            },
            {
              "+1 Reach":" The spell applies the Stunned Tilt."
            },
            {
              "+2 Reach":" The spell affects thrown weapons."
            }
          ]
        },
        {
          "id":27,
          "identity":{
            "name":"The Great Equalizer (Death •••)",
            "author":"by WHW"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "cost":" 1 Mana",
            "suggested rote skills":" Weaponry, Medicine, Intimidation"
          },
          "description":[
            "The figure of the Grim Reaper has always reminded humanity that no matter who you are, people are all equal in the face of Death. This spell embraces this quality - any weapon targeted by it always deals at least Lethal Damage, ignoring (Potency) points of Armor, and ignoring qualities - supernatural or not - that would degrade the type of Damage. This means that this weapon will deal Lethal Damage to Vampires, for example."
          ],
          "others":[
            {
              "+1 Reach":" For each point of Potency assigned to the spell, you may increase Weapon Rating by one. This may not go beyond 5."
            },
            {
              "+2 Reach and 1 Mana":" As above, but you may go beyond 5 if you also spend a point of Mana."
            },
            {
              "+2 Reach and 1 Mana":" If you pay one Mana, trying to heal damage dealt by this Weapon using Supernatural means provokes a Clash of Will."
            }
          ]
        },
        {
          "id":28,
          "identity":{
            "name":"Hasten End (Death •••)",
            "author":"by Frishman"
          },
          "properties":{
            "practice":" Fraying",
            "primary factor":" Duration",
            "withstand":" Stamina",
            "suggested rote skills":" Brawl, Medicine, Survival"
          },
          "description":[
            "A subtle tweaking of the willworker's entropic shield, made possible by greater understanding, allows him to focus and direct the decay with his intent. For the spell's Duration, whenever he succeeds in causing damage to a target using the Brawl skill he converts a number of points of damage equal to the spell's Potency from bashing to lethal, as the focused decay causes bones to crack and skin to weaken.  "
          ]
        },
        {
          "id":29,
          "identity":{
            "name":"I Am Many (Death •••)",
            "author":"by Moinen"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "withstand":" Stamina"
          },
          "description":[
            "Connects the target's live forces in such a way that damage dealt to any of them is divided among all of them evenly. Treat 1 lethal damage as 2 bashing and 1 aggravated as 3 bashing for the sake of dividing it. Round damage up."
          ],
          "others":[
            {
              "+1 Reach":" Round damage down."
            },
            {
              "+1 Reach":" Targets can’t lose consciousness individually - when all their health boxes are filled they continue to function as long as at least one of the linked Targets still has one health box empty."
            },
            {
              "+1 Reach":" Targets can’t die individually - when all their Health boxes are filled with aggravated damage, they continue to live as long as at least one of the linked Targets still has a health box not filled with aggravated damage."
            },
            {
              "+1 Reach":" Caster can now prioritize Targets making one of them to take damage only when all others have their health boxes full of aggravated damage. This option must be taken separately for every excluded Target."
            },
            {
              "+1 Reach":" Spell can now include a mix of inanimate objects, corpses and generally everything that has the capacity to be damaged. One point of structure equals one point of lethal damage."
            }
          ]
        },
        {
          "id":30,
          "identity":{
            "name":"Invest Soul (Death •••)",
            "author":"by Satchel"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Empathy, Medicine, Occult"
          },
          "description":[
            "The mage primes a living target to serve as a vessel of their Gnosis. The target, who must be a Sleepwalker with a Strong connection to a mage included in the Scale factor of this spell, may be made into a soul stone by any mage under the effects of the same spell (the caster does not require extra spell factors to be included).",
            "For the Duration factor of this spell, a number of mages up to the Potency of this spell may imprint their Signature Nimbus on the target and spend a Willpower dot, ignoring the normal Size 2 limitation for soul stones. While the spell lasts, the subject counts as a soul stone for all purposes and gains a number of dots in the Banner-Bearer Merit equal to the number of mages using them as a soul stone (this may take them above the Merit's normal maximum rating of three dots, though dots above the fifth 'fall off' unless the caster spends a point of Mana at the time of casting).",
            "If the subject is used as the basis for a Demesne, the Demesne persists only as long as they are alive and within the bounds of the location the Demesne was made in (e.g. a Demesne forged from a Sleepwalker acting as a soul stone for three members of a cabal will be disrupted if they leave their church Sanctum).",
            "While serving as a soul stone for a mage, the target is subject to the Nimbus Tilt of that mage for the Duration of the spell."
          ],
          "others":[
            {
              "+1 Reach":" The target may be a Sleepwalker with a Medium connection to a mage included in the Scale factor of this spell."
            },
            {
              "+1 Reach":" The target is not subject to the Nimbus Tilt of a mage whose soul has been invested in them."
            },
            {
              "+1 Reach":" The target may treat the number of soul stones they serve as a Supernatural Tolerance Trait, adding to relevant contested rolls and allowing them to store up to the spell's Potency in Mana."
            },
            {
              "+1 Reach":" The target and any mage whose soul stone they serve as may share their senses as a reflexive action, much like a mage's familiar"
            },
            {
              "+2 Reach":" As above, but the target may serve as a relay for two or more mages to share their senses."
            },
            {
              "+2 Reach":" The target may remain a soul stone even after their death; as long as the spell's Duration persists, a portion of the dead subject up to Size 2 remains a soul stone."
            }
          ]
        },
        {
          "id":31,
          "identity":{
            "name":"Kill Box (Death •••)",
            "author":"by MercSet"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "suggested rote skills":" Occult, Firearms, Intimidation"
          },
          "description":[
            "On this battlefield, no one wins. Anyone afflicted by damages in the Area of the Spell gains a number of bashing damage equal to potency."
          ],
          "others":[
            {
              "+1 Reach":" Characters entering or already in the area gain the Shaken Tilt, as less than obvious cues - a raven's call, snapped twigs, frayed wires, a putrid smell - alert her of the danger of the area without revealing the source."
            },
            {
              "+1 Reach":" Additional damage is lethal instead of bashing "
            }
          ]
        },
        {
          "id":32,
          "identity":{
            "name":"Lay Your Weary Head to Rest (Death •••)",
            "author":"by Frishman"
          },
          "properties":{
            "practice":" Fraying",
            "primary factor":" Potency",
            "suggested rote skills":" Expression, Medicine, Crafts",
            "withstand":" Stamina"
          },
          "description":[
            "The willworker can now take someone whose mind is already reeling from fatigue or narcotic and give them the final push they need to go to the land of dreams. Against a target with the Drugged Condition (whether inflicted by other spells or by conventional consumption of alcohol or narcotics), this spell causes the target to fall asleep for the Spell’s Duration. This spell does not work on a target in combat."
          ],
          "others":[
            {
              "+1 Reach":" The Mage may apply this spell to a target in combat."
            }
          ]
        },
        {
          "id":33,
          "identity":{
            "name":"Lethal Weapon (Death •••)",
            "author":"by Menace"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Potency",
            "suggested rote skills":" Medicine, Crafts, Intimidation"
          },
          "description":[
            "The mage can improve an object's ability to harm others. This bestows the 8-again quality on a weapon."
          ],
          "others":[
            {
              "+1 Reach":" Instead the weapon gains the rote quality"
            },
            {
              "+1 Reach":" The mage improves the lethal qualities of a non-weapon object. This can increase a poison’s Toxicity or increase the amount of damage inflicted by for instance a fire or a electric circuit"
            },
            {
              "+2 Reach":" Used with the above effect, changes bashing damage done by the source to lethal damage."
            }
          ]
        },
        {
          "id":34,
          "identity":{
            "name":"Mend Soul (Death •••)",
            "author":"by Mr.F.I.X"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "suggested rote skills":" Occult, craft or medicine"
          },
          "description":[
            "The soul can be damaged and harmed but as it can be harmed so can it be healed. This spell was designed for that very purpose, to heal what wounds or marks a soul. Often that is a persistent condition the person in question is suffering from and that can be seen when a mage investigates the Soul with the spell Soul Marks. One such ailment may be healed per Potency but the soul only remains in this new found state of health for the Spell’s Duration.",
            "A notable use of this spell is to heal an imperfect soul temporarily, to make a fragment of a soul equal to a whole soul and capable of its functions. However this is not an accomplishment that one can use to claim that they have truly created a soul because this mended soul can still be dispelled and if this mended soul were to be sundered again the result would not be half of a soul but a quarter and require two instances of this spell to be maintained for it to act as a whole soul."
          ],
          "others":[
            {
              "+2 reach and 1 Mana":" the spell's Duration is Lasting."
            }
          ]
        },
        {
          "id":35,
          "identity":{
            "name":"Mortal Frailty (Death •••)",
            "author":"by Five Eyes"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Potency",
            "withstand":" Stamina",
            "suggested rote skills":" Medicine, Weaponry, Intimidation"
          },
          "description":[
            "This spell reasserts Death's claim on a subject, overcoming supernatural resilience. For the Duration of the spell, the subject suffers lethal damage from any source that would cause lethal damage to a normal human; a manifested spirit or ambulatory corpse finds that blades and guns are just as fearsome to them as to a flesh-and-blood mortal. This affects a number of injuries equal to the spell's Potency during the course of its Duration."
          ],
          "others":[
            {
              "+2 Reach":" All injuries during the spell's Duration are affected."
            },
            {
              "+1 Reach and +1 Mana":" The subject will suffer aggravated damage from sources that deal aggravated harm to normal humans."
            },
            {
              "+1 Reach":" Attacks against the subject gain the armor-piercing quality, rated at the spell's Potency."
            }
          ]
        },
        {
          "id":36,
          "identity":{
            "name":"Nihilism (Death •••)",
            "author":"by espritdecalmar"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "withstand":" Composure",
            "suggested rote skills":" Expression, Persuasion, Socialize"
          },
          "description":[
            "As below, so above. The mage infuses the subject with the Underworld's tableaux of abject self-abuse. The subject of the spell gains the Wanton Condition."
          ],
          "others":[
            {
              "+1 Reach":" The subject's Virtue and Vice are switched, as if they were in the Autochthonous Depths."
            }
          ]
        },
        {
          "id":37,
          "identity":{
            "name":"Soul Fire (Death •••, Forces •••)",
            "author":"by Neros"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Science, Stealth, Empathy"
          },
          "description":[
            "The energy targeted by this spell no longer affects the physical world but instead harms the Ghoul. Fire won’t sear flesh, light won’t illuminate objects, ect. Mechanically, most effects are affected by how high people's Integrity is. Like the higher light illuminates better when it is high, damaging energy harms better the lower it is (crispy sins)."
          ]
        },
        {
          "id":38,
          "identity":{
            "name":"Stories Bones Tell (Death •••)",
            "author":"by Flinty "
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Occult, Science, Survival"
          },
          "description":[
            "Many Mages know how to summon and bind ghosts to learn the secrets of the deceased. Fewer mages have realized that the same thing can be accomplished if one has the remains of a dead person on hand, even if its ghost has long since departed. This spell animates a corpse, skeleton or even the ashes of a deceased human being. This undead creature can barely move, but has the power to speak, even though its voice often sounds nowhere near human. The corpse remains animated for the duration of the spell and can be conversed with normally. It possesses the knowledge and personality of its owner at the time of her death."
          ],
          "others":[
            {
              "+1 Reach":" The mage can pose up to Potency questions that the animated corpse must answer completely and truthfully."
            },
            {
              "+1 Reach":" The corpse regains its ability to move around freely, though it is not particularly strong or agile. Treat all its physical attributes as 1."
            }
          ]
        },
        {
          "id":39,
          "identity":{
            "name":"Touch of Sacrifice (Death •••)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "suggested rote skills":" Occult, Medicine, Politics"
          },
          "description":[
            "The necromancer pushes the shadows of Death looming over someone to another. She may transfer a number of bashing or lethal wounds equal to the spell's Potency from one target to another, both within the spell's Scale. If the mage does not increase the Scale factor, the spell automatically targets herself. When targeting multiple subjects, the mage may divide Potency among them. Any Tilts or Conditions connected to the wounds are also transferred."
          ],
          "others":[
            {
              "+1 Reach":" The mage may transfer the wound levels of one target to everyone else within the spell's Scale, divided as he sees fit. Alternatively, he may transfer the wound levels of everyone within the Scale into one target."
            },
            {
              "+1 Reach":" The spell extends to aggravated wounds."
            },
            {
              "+1 Reach":" The spell extends to ghosts and their Corpus levels, provided the mage can perceive them."
            }
          ]
        },
        {
          "id":40,
          "identity":{
            "name":"Undead Endurance (Death •••)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Medicine, Occult, Athletics"
          },
          "description":[
            "The necromancer infuses a living body with entropic energies, making it resistant against damage much like the undead. The subject downgrades all lethal damage from kinetic sources to bashing for a number of attacks equal to Potency. The subject also does not need to roll to stay conscious from damage, and does not bleed out when his Health is filled with lethal damage.",
            "Also, the subject's biological functions are held in stasis. He does not need to breathe, eat, or sleep, and does not age. However, this means that he does not heal naturally, and time spent under this spell's effects do not count towards resolving physical Conditions.",
            "Lastly, any Death spell designed to affect corpses, and similar supernatural powers affect the subject normally. If those powers are non-Lasting, they wear off automatically once the spell expires."
          ],
          "others":[
            {
              "+1 Reach":" The spell also downgrades all aggravated damage from kinetic sources to lethal, for a number of attacks equal to Potency."
            },
            {
              "+1 Reach":" The subject does not suffer wound penalties, and Personal Tilts caused by non-aggravated damage."
            },
            {
              "+1 Reach":" The subject's wounds and physical Conditions heal naturally."
            },
            {
              "+1 Reach":" The spell grants the subject one dot of Strength or Stamina per Potency, divided as the mage sees fit."
            }
          ]
        }
      ],
      "adept":[
        {
          "id":41,
          "identity":{
            "name":"Body of the Dead (Death ••••)"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" Stamina",
            "suggested rote skills":" Medicine, Occult, Subterfuge"
          },
          "description":[
            "This spell allows the mage to transition a subject’s flesh into an undead state, using Twilight as a medium for the transformation. While undead, the subject takes only bashing damage from many sources that would normally cause lethal damage, including most non-supernatural weapons, and is not rendered unconscious when her health track is filled with bashing damage, nor does she bleed out when her health track is full of lethal damage (although this may render her unconscious). Wounds take the form one would expect on a corpse. This spell does not allow the downgrading of aggravated damage, nor does it allow wounds to heal naturally.",
            "This also protects against any need to eat or breathe, although the subject still requires periods of inactivity to remain in motion, requiring at least four hours of downtime every night, before beginning to suffer penalties from fatigue. This does not replenish Willpower. The subject’s appearance is that of a walking corpse, albeit one relatively free of decay.",
            "If this spell wears off while the subject is suffering from wounds that would have been more severe on her living form, those wounds immediately upgrade to the appropriate level of damage."
          ],
          "others":[
            {
              "+1 Reach":" The subject no longer requires any downtime to continue functioning normally."
            },
            {
              "+1 Reach":" The subject may heal wounds naturally at her normal rate."
            },
            {
              "+1 Reach":" Mundane sources of aggravated damage are downgraded to lethal damage. This has no effect on supernatural sources of such damage."
            },
            {
              "+1 Reach":" The subject is not rendered unconscious when her right-most healthbox is filled with lethal damage."
            }
          ]
        },
        {
          "id":42,
          "identity":{
            "name":"Bomb Disposal (Death ••••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Crafts, Science, Firearms"
          },
          "description":[
            "In the latter parts of WWII, the British, in order to disarm German bombs started soaking them in liquid nitrogen. This froze the battery within until it couldn't pass a current and so the bomb could no longer trigger. With this spell the mage can perform the same trick, though instead of using liquid nitrogen, the mage simply drops the temperature directly with magic. Despite its name, this spell works on all types of batteries, not just those used in bombs."
          ],
          "others":[
            {
              "Drawback":" The Germans didn't know the British were using this trick and thus developed no counter. Today's bomb makers do know however and may develop their bombs to either be immune or to go off when this trick is tried. Any mage would be wise to investigate before using this spell on any bomb."
            }
          ]
        },
        {
          "id":43,
          "identity":{
            "name":"Cryonic Sleep (Death ••••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Medicine, Occult, Science"
          },
          "description":[
            "The body is brought to a state close to death while low temperatures are used to preserve organic tissue. This allows the subject to be cryonically preserved to be revived at a later date. This is not perfect however and causes one Aggravated damage per year that cannot be healed until the subject has been revived. If the entire health track is filled with Aggravated damage revival is no longer possible."
          ],
          "others":[
            {
              "+2 Reach and 1 Mana":" The preservation process has been perfected, the subject no longer suffers Aggravated damage and can be revived no matter how much time has passed."
            }
          ]
        },
        {
          "id":44,
          "identity":{
            "name":"Death Fetish (Death ••••)",
            "author":"By Inodiv"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" Rank",
            "suggested rote skills":" Crafts, Occult, Intimidation"
          },
          "description":[
            "This spell allows the mage to bind a hibernating ghost into a fetish, a kind of magical item. Fetishes work like an Imbued Items, save that a fetish is powered by Essence and, instead of holding a Supernal spell, it holds one of the bound ghost’s Influences and, possibly, some of its Numina.",
            "Creating a fetish requires that the spell have one Potency per dot of Influence the object will possess, plus one Potency per Numen. A fetish doesn’t have to host all of the ghost’s abilities. Activating the powers within the fetish is an instant action and uses the ghost’s dice pool.",
            "The fetish has its slumbering ghost’s Essence pool and can recharge Essence when near one of the ghost’s Anchors. It also recharges Essence when the ghost contained within is remembered by the living. The fetish’s user can pay Essence out of the fetish’s pool to power its abilities. If the bound ghost ever acquires Essence equal to its Corpus, however, the spell ends immediately.",
            "Triggering the bound ghost’s Ban or Bane immediately destroys the fetish."
          ]
        },
        {
          "id":45,
          "identity":{
            "name":"Destroy Wounds (Death ••••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Unraveling",
            "primary factor":" Potency",
            "suggested rote skills":" Empathy, Medicine, Survival"
          },
          "description":[
            "Adepts of Death can attack the marks Death leaves on still-living Patterns, undoing damage from lethal wounds as its influence is unraveled. Each level of Potency heals two lethal damage. Wounds healed in this way don’t leave scars, as the wounds are attacked on a direct metaphysical level instead of being traditionally ‘healed’."
          ],
          "others":[
            {
              "+1 Reach and 1 Mana":" The spell heals aggravated damage."
            }
          ]
        },
        {
          "id":46,
          "identity":{
            "name":"Don’t You Cry No More (Death ••••)",
            "author":"by Frishman"
          },
          "properties":{
            "practice":" Unraveling",
            "primary factor":" Potency",
            "suggested rote skills":" Expression, Medicine, Crafts",
            "withstand":" Stamina"
          },
          "description":[
            "Draining vitality and energy from the target, the Mage forces the target to go straight from 'awake' to 'asleep' without needing all those steps in between. The target sleeps for the spell’s Duration. Against a target undergoing an adrenaline rush, such as from being in combat or otherwise on edge, this spell merely applies the Drugged Condition."
          ],
          "others":[
            {
              "+1 Reach":" The spell now unleashes its full effect on a target experiencing a rush of adrenaline."
            }
          ]
        },
        {
          "id":47,
          "identity":{
            "name":"Echo to Echo (Death ••••)",
            "author":"by Aeryes"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" Resistance",
            "suggested rote skills":" Occult, Medicine, Subterfuge"
          },
          "description":[
            "By means of this spell the Mage transforms a ghost - the echo of a person - into a Soul Echo. The Soul Echo behaves like a pale imitation of a soul, allowing it to be attached to a person whose soul had been removed, in order to mitigate the seriousness of their situation.",
            "Like a regular soul, it can only be attached to people without a soul - under the Soulless, Enervated, or Thrall Conditions. Attaching the Soul Echo to a person without a soul does not resolve the Soulless, Enervated, nor Thrall Conditions, rather, the person gains the Almost Souled persistent Condition."
          ],
          "others":[
            {
              "Almost Souled (Persistent Condition)":" The character has been implanted with a Soul Echo, halting their degradation from the lack of a soul. She does not regain Willpower from acting according to her Virtue or Vice. The Soul Echo functions as a soul replacement, and the character cannot regain her soul while under this Condition. Soulless, Enervated, and Thrall Conditions are suppressed while the character is under the Almost Souled Condition."
            },
            {
              "Resolution":" Lose the Soul Echo."
            },
            {
              "Beat":" Lose Wisdom or Integrity in a scene where you regain Willpower through surrender."
            }
          ]
        },
        {
          "id":48,
          "identity":{
            "name":"Ghost Fire (Death ••••, Forces ••••)"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Potency",
            "suggested rote skills":" Occult, Science, Intimidation"
          },
          "description":[
            "By combining the properties of death, cold and fire; cold flames are created. These flames function like normal fire, except that they do not radiate any heat at all, this does not prevent them from burning anything suitably flammable. Additionally, these flames cannot be put out by lowering the temperature or suffocating them. Only the running out of fuel or the use of Magic can end these flames."
          ],
          "others":[
            {
              "+1 Reach and 1 Mana":" For one Mana, the flames are particularly destructive and now deal Aggravated damage."
            },
            {
              "+1 Reach":" The flame burns the souls of those who touch it. This causes the Soul Shocked Condition."
            },
            {
              "+1 Reach":" When burning a souled being instead of dealing damage based on the size and 'heat' of the flame, deal damage solely based on the sins (Integrity) of the soul. A person with high Integrity could survive infernos, whereas a person with incredibly low Integrity might not even survive contact with a small candle. "
            },
            {
              "+2 Reach":" Not even the lack of fuel stops these flames as they feed on the entropy that would normally end them. Only Magic or other supernatural means can end these flames now."
            }
          ]
        },
        {
          "id":49,
          "identity":{
            "name":"Kill Magic (Death ••••)",
            "author":"By Inodiv"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Potency",
            "withstand":" Arcanum rating of the subject spell’s caster",
            "suggested rote skills":" Academics, Intimidation, Occult"
          },
          "description":[
            "All Awakened magic contains the capacity to end, to allow the Fallen World’s laws to reassert themselves. By Patterning these flaws into reality, the mage may temporarily suppress the spell — or even destroy it entirely. This spell is not potent enough to dispel an Archmage’s spells. A successful casting suppresses the spell for the Duration of Kill Magic. This spell has no effect on Indefinite effects."
          ]
        },
        {
          "id":50,
          "identity":{
            "name":"Many Morbid Forms (Death ••••)",
            "author":"By Inodiv"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" Stamina",
            "suggested rote skills":" Animal Ken, Occult, Science"
          },
          "description":[
            "The subject corpse can fully take on the form of another species, but remains a corpse - a dead human body can be physically changed into the body of a dead wolf, for example. While the spell can greatly transform its subject’s Size, changing into much larger forms is difficult. The Scale factor of the spell must cover the larger of the Size traits, before and after the transformation. The subject’s clothes and gear do not change."
          ],
          "others":[
            {
              "+1 Reach":" The target may be one of the ‘living’ dead instead of a simple corpse - a Revenant or Vampire, or other undead being. Once transformed, they remain recognizably supernatural - a vampire transformed into an undead wolf may have unnaturally long canines, for example."
            },
            {
              "Add Matter ••••":" The subject’s gear changes to fit her new form."
            }
          ]
        },
        {
          "id":51,
          "identity":{
            "name":"Morbid Projection (Death ••••)",
            "author":"by Five Eyes "
          },
          "properties":{
            "practice":" Unraveling",
            "primary factor":" Duration",
            "withstand":" Resolve",
            "suggested rote skills":" Medicine, Occult, Stealth"
          },
          "description":[
            "The mage slackens the connection between the subject's self and their mortal form, causing them to become a deathlike projection - a living ghost. Their ephemeral form uses the rules for Dream Forms (Chapter six) and is present in (and tangible to) ghostly Twilight, leaving the body in a comatose state with no signs of life (as Suppress Life.) Anything carried on the body may be echoed in deathly ephemera if desired, but this morbid reflection dooms mortal objects - their material forms will be destroyed, leaving only ghostly echoes, at some point before the end of the story.",
            "If the ephemeral projection is destroyed, the subject returns to their body with the Soul Shocked Condition."
          ],
          "others":[
            {
              "+1 Reach":" The projection may be passed through an Avernian gate within range during its creation, causing the subject's consciousness to undergo a sojourn to the Underworld as a half-ghost."
            },
            {
              "+1 Reach":" As an instant action, the subject may sculpt and reshape their ephemeral body, as per Shape Ephemera. One shaping may be maintained at a time for each Potency of the spell; any shaping in excess of this replaces old ones."
            },
            {
              "+1 Reach":" The mage creates an ectoplasmic shell anchored to the projection. For the Duration of the spell the subject's ghostly form is effectively mirrored by this medium, allowing it to be perceived by non-ephemeral beings. It remains intangible, barring the use of other magic."
            },
            {
              "+2 Reach and +1 Mana cost":" As above, save that the projection is effectively Manifested through the ectoplasmic medium and may interact normally with material beings and objects."
            }
          ]
        },
        {
          "id":52,
          "identity":{
            "name":"Rapid Claim (Death ••••)",
            "author":"By Inodiv"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Potency",
            "withstand":" Resolve",
            "suggested rote skills":" Academics, Occult, Science"
          },
          "description":[
            "With this spell, a mage can greatly accelerate the rate at which a Ghost can merge as part of the Claim Manifestation. The speed of the merging process doubles for each level of Potency. When the spell expires, the effects quickly revert, reversing the merging process to the point it would have achieved naturally, unless the process has completed, in which case the effect is Lasting."
          ],
          "others":[
            {
              "+1 Reach":" The caster may not only accelerate the process, but guide it - this allows them to choose what attributes are enhanced as part of the merging process."
            }
          ]
        },
        {
          "id":53,
          "identity":{
            "name":"Restore the Foundation (Death ••••)",
            "author":"by Frishman"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" None",
            "cost":" 1 Mana",
            "suggested rote skills":" Medicine, Occult, Empathy"
          },
          "description":[
            "The Mage uses his Supernal knowledge and a bit of his own power to fill in the cracks in the soul of another. For the spell's Duration, the Mage may suppress one instance of the following Conditions: Madness, Broken, or Fugue."
          ]
        },
        {
          "id":54,
          "identity":{
            "name":"Shadow Golem (Death ••••)",
            "author":"by Aristarkos"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Crafts, Expression, Occult"
          },
          "description":[
            "The mage constructs a moving construct out of shadows, mimicking the capacity of Matter Adepts to create golems. The Potency of this spell is divided between the Durability and Retainer rating of the Golem. The golem is size 5 or lower, as the mage sees fit. The Shadow Golem is incapable of combat and has no Defense rating. Its Structure will determine its Health.",
            "The shadow golem is in no way capable of decisión-making and can only obey short and simple commands given by the mage."
          ],
          "others":[
            {
              "+1 Reach":" The mage may make the golem capable of defense, granting a Defense rating equal to the Potency of the spell."
            },
            {
              "Add Spirit ••••":" The mage installs a Spirit as a guiding intelligence, granting the Golem the capacity to use Numina."
            },
            {
              "Add Mind ••••":" The mage installs a synthetic mind as a crude guiding intelligence."
            }
          ]
        }
      ],
      "master":[
        {
          "id":55,
          "identity":{
            "name":"Create Zombie (Death •••••)",
            "author":"By Inodiv"
          },
          "properties":{
            "practice":" Making",
            "primary factor":" Duration",
            "suggested rote skills":" Crafts, Medicine, Occult"
          },
          "description":[
            "The mage creates an animate corpse. She can fashion the zombie as a facsimile of another person, either alive or dead, though the zombie possesses none of the mental or social traits or features (ie, personality, knowledge) of the person it was modeled after. By default, the created construct functions as described in ‘Quicken Dead’, but has health equal to Size + Potency."
          ],
          "others":[
            {
              "+1 Reach":" The mage may create a zombie suitable for combat. It uses its dot-rating as a dice pool for attacks, and has a Defense 3, Initiative 1, and Speed 6."
            },
            {
              "+2 Reach":" The mage may spend a point of Mana to imbue the zombie with exceptional physical prowess. The zombie has Defense 5, Initiative 3, and Speed 8"
            }
          ]
        },
        {
          "id":56,
          "identity":{
            "name":"Demonic Ice (Death •••••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Making",
            "primary factor":" Duration",
            "suggested rote skills":" Occult, Survival, Intimidation"
          },
          "description":[
            "Rather than creating a normal cold, this spell creates a cold filled with the power of entropy and death. Anybody who touches the ice this cold creates will find themselves in excruciating pain and feel terribly, terribly cold.",
            "Mechanically, the victim suffers the Extreme Cold Environmental Tilt, however, this Tilt doesn't disappear until the spell expires. Until then no attempts to warm or heat the subject will have any effect, unless it's supernatural. In that case, it causes a Clash of Wills."
          ]
        },
        {
          "id":57,
          "identity":{
            "name":"Final Seal (Death •••••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Making",
            "primary factor":" Potency",
            "withstand":" Arcanum rating of the subject spell’s caster",
            "suggested rote skills":" Academics, Intimidation, Occult"
          },
          "description":[
            "A Master of Death can create endings where none existed previously, and thus can end even the most persistent magical effects. This spell temporarily suppresses another spell - or destroys it entirely. This spell is not potent enough to dispel an archmage’s spells. A successful casting suppresses the spell for the Duration of Final Seal."
          ],
          "others":[
            {
              "+1 Reach":" This may target other supernatural effects, which is Withstood by the same trait that would be added to Supernatural Tolerance in a Clash of Wills."
            },
            {
              "+1 Reach":" This spell also enforces an absence of magic. If cast over an area, newly cast spells within that area provoke a Clash of Wills to take form at all. If combined with the above Reach effect, this applies to all supernatural abilities."
            },
            {
              "+2 Reach and 1 Mana":" For one point of Mana, the dispellation effect is Lasting. If the effect’s original creator is still alive and has not relinquished the spell, and would otherwise be aware if the effect were to Clash, she knows one of her effects was destroyed."
            }
          ]
        },
        {
          "id":58,
          "identity":{
            "name":"Offering Table (Death •••••)",
            "author":"by espritdecalmar"
          },
          "properties":{
            "practice":" Making",
            "primary factor":" Potency",
            "suggested rote skills":" Academics, Crafts, Socialize"
          },
          "description":[
            "The Master of Death conjures up a feast for the departed. This spell creates a number of ephemeral goods equal to the spell's Scale; these objects usually take on the forms of things offered to the dead in various cultures: candy, bread, money, liquor, and so forth. The area of the offering gains the Resonant Condition for all ghosts, and any ghost who partakes of the offerings gains Essence equal to the spell's Potency."
          ],
          "others":[
            {
              "+1 Reach":" The offering area gains the Open Condition for ghosts."
            },
            {
              "+1 Reach":" Mortals who partake of the feast become infused with the power of the Underworld, gaining the ability to see unmanifested ghosts for the spell's Duration."
            },
            {
              "+1 Reach":" As above, but instead, a feasting mortal gains the Open Condition for the spell's Duration."
            }
          ]
        }
      ]
    }
  },
  {
    "fate":{
      "initiate":[
        {
          "id":59,
          "identity":{
            "name":"Foreshadow (Fate •)",
            "author":"by espritdecalmar"
          },
          "properties":{
            "practice":" Compelling",
            "primary factor":" Potency",
            "suggested rote skills":" Academics, Expression, Subterfuge"
          },
          "description":[
            "When a mage casts this spell, he chooses a destiny (or Destiny) of which he is aware. The spell causes the strings of fate to manifest one symbol per dot of Potency of that destiny between the time of casting and when the fated event occurs. For instance, if a Sleeper is destined to get into a car crash, the spell might cause her to see a commercial about auto insurance, or she might drive by the site of a car crash the day before. The effects of this spell are normally minor and subtle, but they can be useful for getting someone to believe in the power of fate and symbolism. Alternatively, the mage might wish to cause foreshadowing to manifest for particularly obscure destinies in order to analyze a mystery from a different point of view."
          ],
          "others":[
            {
              "+1 Reach":" The mage chooses how the foreshadowing manifests."
            }
          ]
        }
      ],
      "apprentice":[
        {
          "id":60,
          "identity":{
            "name":"Devil’s Whisper (Fate ••, Mind •)",
            "author":"by Gantolandon"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Duration",
            "withstand":" Composure",
            "suggested rote skills":" Socialize, Streetwise, Subterfuge"
          },
          "description":[
            "This spell was originally created by a Claviclarius mage as a means to weed out prospective candidates to the Legacy. It takes the recipient's Vice and provides them with opportunities to fulfill it – at the most inopportune moments. A Lustful person will get hit on beautiful people of his preferred gender – but only when their partner is around. A Hostile salesman will have a meeting with an important, but mean customer. Fate will keep the wound fresh for the Duration of the spell, arranging similar events or merely providing reminders of the lost opportunity. The character gets the Tempted Condition until the spell expires."
          ],
          "others":[
            {
              "Condition":" Tempted - Your character really wants to indulge their Vice despite the risk it poses. They get -2 to all rolls involving what they consider their obligation."
            },
            {
              "Resolution":" The Vice is indulged."
            }
          ]
        },
        {
          "id":61,
          "identity":{
            "name":"No Tomorrow (Fate ••)",
            "author":"by Flinty"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Potency",
            "withstood":" Composure",
            "suggested rote skills":" Academics, Persuasion, Subterfuge"
          },
          "description":[
            "Every action, even the tiniest movement, has consequences. This spell renders its subject unable to perceive the long-term consequences of an action he contemplates taking. For example, a man on vacation fails to see the damage an affair could have on his marriage."
          ],
          "others":[
            {
              "+1 Reach":" The mage may fabricate a false consequence the subject perceives to be the logical outcome of his actions. Said man might be made to think that having an affair be ultimately beneficial for his marriage."
            },
            {
              "+2 Reach and 1 Mana":" Short-term consequences are hidden as well. The subject can contemplate the act of jumping from a building, but is unable to perceive what the fall will do to him."
            }
          ]
        },
        {
          "id":62,
          "identity":{
            "name":"Predetermination (Fate ••)",
            "author":"by Flinty"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Potency",
            "withstood":" Resolve",
            "suggested rote skills":" Science, Intimidation, Subterfuge"
          },
          "description":[
            "A favorite among Seers that serve Ruin, this spell veils the fact that your own actions matter from the subject. The future seems to be set in stone: no matter what you do, it seems impossible for the subject to make a difference. Any attempt the subject makes to further a goal, defined by the mage upon casting the spell, costs 1 Willpower. Even then, dice pools are penalized by the spell's Potency."
          ]
        },
        {
          "id":63,
          "identity":{
            "name":"Silence of Harpocrates (Fate ••, Mind ••)",
            "author":"by KaiserAfini"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Duration",
            "withstand":" Composure",
            "suggested rote skills":" Medicine, Stealth, Subterfuge"
          },
          "description":[
            "Sometimes all that is needed to guarantee an operation's success is for key witnesses to keep quiet. This curses the target to be unable to communicate. Sometimes they will lose their voice or bite their tongue, other times their hands will shake, rendering them unable to write or type, sometimes the idea or the specific words/signs simply 'slip their mind'. It is said this was originally used by the Arrow to quietly poison agents of the Seers."
          ],
          "others":[
            {
              "+1 Reach":" The caster can specify up to [Potency] specific topics or means of communication and the spell will only target those."
            }
          ]
        }
      ],
      "disciple":[
        {
          "id":64,
          "identity":{
            "name":"Against the Odds (Fate •••)",
            "author":"by Menace"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Potency",
            "suggested rote skills":" Athletics, Drive, Subterfuge"
          },
          "description":[
            "One in a million chances happen in 9 cases out of 10 at least when you're an Adept of Fate. Under the effects of this spell, the subject can change Environmental penalties to rolls into Environmental bonuses up to the potency of the spell. This affects rolls up to equal to the Spell’s potency."
          ],
          "others":[
            {
              "+1 Reach":" The mage can do the opposite and change bonuses into penalties."
            }
          ]
        },
        {
          "id":65,
          "identity":{
            "name":"Moral Dilemma (Fate •••)",
            "author":"by amechra"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "withstand":" Composure",
            "suggested rote skills":" Academics, Empathy. Politics"
          },
          "description":[
            "This bizarre spell adds a touch of psychological cruelty to what would otherwise be a straightforward curse. This spell must be cast with exactly two targets - any more or less, and it immediately fails. Once cast, each target chooses either masochism or sadism as a Reflexive action. If they picked masochism, the spell imposes one Hex on them - if they choose sadism, the spell imposes two Hexes on the other target instead. The targets have a rough understanding of what each choice entails - hurt yourself, or hurt the other person more."
          ],
          "others":[
            {
              "+1 Reach":" Each target that chooses sadism also receives a Boon - they are aware of this fact."
            },
            {
              "Add Space •••":" If there is a Sympathetic Tie between the two targets, each target that chose sadism reduces the strength of the tie by one step."
            }
          ]
        },
        {
          "id":66,
          "identity":{
            "name":"Oath of Friendship (Fate •••)",
            "author":"by MovingMind"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "withstand":" Composure",
            "suggested rote skills":" Socialize, Persuasion, Politics"
          },
          "description":[
            "The spell sanctifies an existing bond of friendship, giving it supernatural depth. All subjects of the spell gain the benefits of The True friend with respect to each other. If a subject of the spell is turned against the others, they suffer a Hex.  As long as the spell is within spell control, the caster of the spell knows which of the subjects are benefitting from the spell, and which of their number has gotten a hex. When cast with exactly two participants that already have the true Friend merit, the spell grants the Loved merit. This variation is usually called 'True love'."
          ],
          "others":[
            {
              "+1 Reach":" If a subject enters the oath with false feelings of friendship, they suffer a Hex instead of the benefits of the spell."
            },
            {
              "+1 Reach":" The subjects of the spell also know which of their number have gotten a hex."
            },
            {
              "+1 Reach":" The subjects of the spell are aware if one of the participants dies."
            },
            {
              "+1 Reach":" The subjects may spend Willpower on behalf of each other."
            },
            {
              "+1 Reach":" Damage received by one subject is shared equally between the subjects of the spell."
            },
            {
              "+1 Reach":" Supernatural effects that would turn one subject against the others cause a clash of wills."
            }
          ]
        }
      ],
      "adept":[
        {
          "id":67,
          "identity":{
            "name":"Adrasteia (Fate ••••)",
            "author":"by Five Eyes"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" Resolve (if desired)",
            "suggested rote skills":" Academics, Athletics, Streetwise"
          },
          "description":[
            "Fate often strikes ironically, dooming people in venues where they imagine themselves at their best. This spell gathers a cluster of misfortune around one Skill that the mage names during casting, causing the subject to suffer unexpected setbacks when they attempt to exercise it. The subject gains the Ordeal of [Trait] Persistent Condition keyed to the named Skill. While this can foil a skilled rival in a moment of crisis, mages also levy the curse on those that seek to improve a Skill, as the hardships will provide a more strenuous and rapid course of enrichment."
          ],
          "others":[
            {
              "+1 Reach":" During the spell's Duration, minor perturbations of Fate steer the subject into situations where they are obligated to use the marked Trait. This works as a malevolent version of Serendipity, forcing use of the Trait during one important roll of a different Trait from the same type (Skill, Attribute, etc.) and category (Mental, Social, Physical) in a given scene."
            },
            {
              "+2 Reach":" As above, but the marked Trait will substitute in for any Trait of the same type. A diplomat with Ordeal of [Firearms] would find their Socialize effort now hinges on small talk about military hardware, for instance."
            },
            {
              "+1 Reach":" The mage may instead name an Attribute; the Condition will apply to this Trait."
            },
            {
              "+2 Reach":" The spell becomes Lasting; the Condition will persist until Resolved."
            },
            {
              "Condition":" Ordeal of [Trait] (Persistent) - Fate conspires to foil your efforts regarding a Skill or other Trait. The first time each scene that you roll a dice pool containing the Trait, circumstances turn against you, levying an equipment penalty equal to your dots in the Trait. A character with Medicine 3 discovers that some of their tools have been misplaced and the lighting has become unreliable, imposing a -3 penalty; if they had been less capable fate would have been less cruel, while a master surgeon might find themselves more deeply disadvantaged."
            },
            {
              "Resolution":" Increase your rating in the marked Trait or gain a Specialty or Merit that displays growth in that field."
            },
            {
              "Beat":" Suffer the penalty on a roll where the consequences of failure would represent a genuine setback or real hardship for you or those around you."
            }
          ]
        },
        {
          "id":68,
          "identity":{
            "name":"Erase Name (Fate ••••)",
            "author":"by espritdecalmar"
          },
          "properties":{
            "practice":" Unraveling",
            "primary factor":" Potency",
            "withstand":" Composure",
            "suggested rote skills":" Academics, Politics, Streetwise"
          },
          "description":[
            "This spell disconnects a target from one of his identities. When cast, the mage chooses one name the target is known by: This can be his sympathetic name, a nickname, an online handle, special title, or the like. For the spell's duration, no one can make the connection between the target and that name. Reduce a social merit connected to the name (such as Fame, Status, or Alternate Identity) by the spell's Potency. For as long as the identity is suppressed, the name cannot be used as a Sympathetic Yantra to cast spells on the subject. If the subject's sympathetic name is erased, the Withstand rating of spells cast on him does not increase from not knowing it. This spell can erase Shadow Names and the Shadow Name merit, but requires a point of mana to do so."
          ],
          "others":[
            {
              "+1 Reach":" The mage can split the spell's Potency among multiple social merits."
            },
            {
              "+1 Reach":" The subject also gains the Anonymity merit at a dot rating equal to the spell's Potency."
            }
          ]
        },
        {
          "id":69,
          "identity":{
            "name":"Reversal of Fortune (Fate ••••)",
            "author":"by Ophidimancer"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Occult, Larceny, Subterfuge"
          },
          "description":[
            "Many cultures revere the Sacred Fool, a clownish figure that perverts many of society's mores and yet, in their contrary behavior, are able to access a sort of crazy wisdom that allows them to know things beyond their ken and perform miraculous feats. This archetype rings true in Supernal Arcadia, and the Fate Arcanum allows a mage to tap into this same wisdom, turning hindrances into blessings. The subject of this spell reverses the dice effects of any Conditions and Tilts which they are under, penalties becoming bonuses and vice versa."
          ],
          "others":[
            {
              "+1 Reach":" The reversal only applies one way. Penalties become bonuses, but bonuses do not become penalties, for instance."
            }
          ]
        }
      ],
      "master":[
        {
          "id":70,
          "identity":{
            "name":"Downfall (Fate •••••)",
            "author":"by espritdecalmar"
          },
          "properties":{
            "practice":" Making",
            "primary factor":" Duration",
            "withstand":" Composure",
            "suggested rote skills":" Crafts, Larceny, Persuasion"
          },
          "description":[
            "A Witch who wants you dead can do so much more than just blast you to smithereens. She can set up the entire world against you if she so chooses, and if you've crossed her bad enough. When the mage casts this spell, she chooses something the target will lose permanently, and by what means that will happen (uranium, wasps, true love's kiss, etc). For the spell's Duration, everything possible will converge to make the loss come about; rolls to help bring the target's downfall add the spell's Potency to the dice pool, while rolls to hinder the downfall are penalized by the same amount.",
            "With this spell, a mage can kill a target, inflict a Persistent Condition or Tilt, or permanently remove access to a given merit (PCs targeted by this spell are still subject to the Sanctity of Merits, but cannot reallocate Experiences until the spell's duration expires). The means the mage chooses when casting the spell will play a pivotal role in the downfall: The target kisses the woman of his dreams, but it turns out he has a lethal allergy to a rare ingredient in her lipstick, or a calamitous misadventure involving a misplaced wasp nest leads to his impeachment from office."
          ],
          "others":[
            {
              "+1 Reach":" If the spell is meant to kill the target, the means of his death is treated as a Bane."
            },
            {
              "+1 Reach e 1 Mana":" Successful rolls to bring about the downfall are automatically exceptional successes; failed rolls to prevent the downfall are automatically dramatic failures."
            }
          ]
        },
        {
          "id":71,
          "identity":{
            "name":"Nobody (Fate •••••)",
            "author":"by Menace"
          },
          "properties":{
            "practice":" Unmaking",
            "primary factor":" Duration",
            "suggested rote skills":" Intimidation, Larceny, Computer"
          },
          "description":[
            "Our lives are stories told by fate. We grow when we face the unexpected, either succeeding or failing. This spell breaks that and curses the target with an uneventful life. Unexpected things rarely happen to the subject, and when they do, he fails to confront them, his narrative destroyed by the magic. The subject of the spell can never gain Beats."
          ]
        },
        {
          "id":72,
          "identity":{
            "name":"Valdemar's Gaol (Fate •••••, Time •••••)",
            "author":"by KaiserAfini"
          },
          "properties":{
            "practice":" Making",
            "primary factor":" Duration",
            "cost":" 1 mana",
            "withstand":" Composure",
            "suggested rote skills":" Academics, Occult, Science"
          },
          "description":[
            "This suspends the target in a state of quantum uncertainty, both alive and dead (or broken and unbroken for objects). The caster can then name up to [Potency] keys that resolve this state in a given way, ending the spell. For example, at Potency 3, the keys could be: solving a given riddle returns them alive, they would return dead if the answer is incorrect or alive if a given melody is played on a pan pipe. The keys must be something the caster could perceive if they were present with the target. The caster must also set a default resolution for when the spell ends, but it can be changed reflexively while he retains spell control.",
            "Targets cannot move, do not require food or sleep, do not age or suffer wounds. Can they perceive anything in that state ? Yes and no, most Mind mages who look into the answer find it hard to explain. Without conjunctional Mind 2, the harrowing experience provokes a breaking point when the spell ends."
          ],
          "others":[
            {
              "Add Mind ••••":" The target retains the ability to speak for the duration and is compelled to answer up to [Potency] questions truthfully and without omission."
            },
            {
              "+1 Reach":" The caster gets a brief vision of the target when the resolution occurs."
            },
            {
              "+1 Reach":" The caster can track the target until the duration ends - not by location, but as a sense of a path that will take them to them."
            },
            {
              "+1 Reach":" The key can be something they could only perceive with Mage Sight."
            }
          ]
        }
      ]
    }
  },
  {
    "forces":{
      "initiate":[
        {
          "id":73,
          "identity":{
            "name":"Blind Man's Eyes (Forces •)",
            "author":"by Flinty"
          },
          "properties":{
            "practice":" Unveiling",
            "primary factor":" Duration",
            "suggested rote skills":" Science, Athletics, Socialize"
          },
          "description":[
            "Unveiling the visual spectrum to the subject, the mage allows the blind to see once more. For the Duration of the spell the subject ignores the effects of the blinded tilt and condition. A similar spell takes care of deafness."
          ]
        },
        {
          "id":74,
          "identity":{
            "name":"Electronic Awareness (Forces •)",
            "author":"by Flinty"
          },
          "properties":{
            "practice":" Unveiling",
            "primary factor":" Duration",
            "suggested rote skills":" Crafts, Investigation, Science"
          },
          "description":[
            "This Spell reveals all electronic devices to the subject’s senses by highlighting the electrical currents and voltages. The subject can see the flow of electrons, hear the buzz of power and smell a faint whiff of ozone in the presence of electronic devices."
          ]
        },
        {
          "id":75,
          "identity":{
            "name":"Lightwarden (Forces •)",
            "author":"by Flinty"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Duration",
            "suggested rote skills":" Investigation, Science, Survival"
          },
          "description":[
            "Where there is light, an initiate of Forces can see, even if the light never reaches his eyes. This spell shows the caster the photons emitted and reflected from the subject or area that is the target of the spell."
          ],
          "others":[
            {
              "+1 Reach":" When targeting a large area this spell can overwhelm the mage's senses with a flash flood of light, this reach allows the mage to compensate for sensory overload."
            }
          ]
        },
        {
          "id":76,
          "identity":{
            "name":"Magnetoreception (Forces •)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Unveiling",
            "primary factor":" Duration",
            "suggested rote skill":" Science, Survival, Animal Ken"
          },
          "description":[
            "The earth's magnetic field has a strength of 0.5 Gauss (Unit) and animals use it to orient themselves. But this presents a paradox, for the strength of these fields is many orders less than an elementary chemical act. As well as not being strong enough to generate appreciable heating of tissue or cause irritation. So, how do animals sense it? Who knows? I don't! But with this spell the mage can sense and use the earth's fields just as an animal.",
            "This spell gives the mage the benefit of the Direction Sense Merit, but only so long as the earth's magnetic field can be detected and isn't being altered by any strong magnetic forces in the area."
          ],
          "others":[
            {
              "+1 Reach":" In addition to the earth's magnetic fields the mage can sense electric fields in general. This can be used to locate living beings, in the same way as some sharks do. These sharks can locate prey even when said prey has buried itself, the mage now has the same ability."
            }
          ]
        },
        {
          "id":77,
          "identity":{
            "name":"Sense Vibrations (Force •)"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Duration",
            "suggested rote skill":" ?"
          },
          "description":[
            "Mages can become invisible, but thought going completely silent don't happen to many of them, because sight is the most important human sense. This spell exploits this error, listening closely to vibrations in the area and telling mage of their location."
          ],
          "others":[
            {
              "+1 Reach":" The mage knows Size and approximate mass of being who is entering the area."
            },
            {
              "+1 Reach":" The mage can closely listen to being who is entering the area, if he chooses to."
            }
          ]
        }
      ],
      "apprentice":[
        {
          "id":78,
          "identity":{
            "name":"Copy and Paste (Forces ••)",
            "author":"by Flinty"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "suggested rote skills":" Science, Larceny, Streetwise"
          },
          "description":[
            "Just knowing is never enough. With this spell, information can be transferred from one digital device to another."
          ]
        },
        {
          "id":79,
          "identity":{
            "name":"Gravitic Ward (Forces ••)",
            "author":"by HerbertIsBertBert"
          },
          "properties":{
            "practice":" Shielding",
            "primary factor":" Duration"
          },
          "description":[
            "Gravity is just another Force, and while a proficient Mage may seek to redirect it as he desires, there may come times when you will simply want protection from any harm it might occasion.",
            "For the Duration of the spell, the subject is immune to all Bashing damage suffered from gravitic forces and decreases all Lethal damage from these sources by the spell's Potency.",
            "This is primarily falling damage and the damage from objects falling on you, and does not include non-gravitic damage, such as pneumatic crushing engines, or rock physically thrown downwards by someone (though it will protect against any further kinetic energy imparted to that rock by gravity)."
          ],
          "others":[
            {
              "+2 Reach":" The subject is immune to Bashing and Lethal damage from gravitic forces, and decreases all Aggravated damage from such sources by the spell's Potency."
            }
          ]
        },
        {
          "id":80,
          "identity":{
            "name":"Helion Shield (Forces ••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Shielding",
            "primary factor":" Potency",
            "suggested rote skills":" Academics, Occult, Science"
          },
          "description":[
            "The mage shields the target from the deleterious effects of sunlight. For most subjects, this will simply protect from sunburns, cancer risk, and other similar concerns. For beings that take damage when exposed to sunlight, this provides more explicit protection. They gain immunity to bashing damage inflicted by sunlight, and reduce lethal damage from sunlight by the spell’s Potency. The spell has no effect on aggravated damage."
          ],
          "others":[
            {
              "+2 Reach":" The subject is immune to bashing and lethal damage from sunlight, and reduces any aggravated damage from sunlight by the spell’s Potency."
            }
          ]
        },
        {
          "id":81,
          "identity":{
            "name":"Mirage (Forces ••)",
            "author":"by LadyLens"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Duration",
            "suggested rote skills":" Academics, Science, Survival"
          },
          "description":[
            "This spell manipulates atmospheric conditions to create a mirage, an image of a far-distant object that anyone can see. It can be an inferior mirage, a superior mirage, or a Fata Morgana. This is not obvious magic, as mirages are quite real and normal phenomena, though often very striking and provoking of amazement. The Scale parameter determines the Area over which conditions are right for the mirage to be seen; most castings involve advanced Scale."
          ]
        },
        {
          "id":82,
          "identity":{
            "name":"Invisible Air (Forces ••)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Duration",
            "suggested rote skills":" Weaponry, Science, Larceny"
          },
          "description":[
            "The thaumaturge gathers wind and light around a melee weapon, replacing its true form with a hazy figure. The weapon's exact reach is concealed, imposing a Defense penalty equal to Potency on all opponents attempting to engage with its wielder. This advantage does not apply to opponents who do not rely on sight in combat."
          ],
          "others":[
            {
              "+1 Reach":" The melee weapon pulses with powerful wind and light, allowing its wielder to apply the Knocked Down Tilt for a number of attacks equal to Potency."
            },
            {
              "+1 Reach":" The sheath of wind expands to a shield of air, repelling harmful gasses and projectiles slow enough for the wielder to apply Defense against."
            },
            {
              "+1 Reach":" The wind boosts movement, granting a bonus equal to Potency on Dodge rolls."
            }
          ]
        },
        {
          "id":83,
          "identity":{
            "name":"Pyre Ward (Forces ••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Shielding",
            "primary factor":" Duration",
            "suggested rote skills":" Academics, Occult, Science"
          },
          "description":[
            "The caster creates a shield that protects her subject from fire. Mundane flame has no effect on the subject, even if they would normally suffer increased damage for any reason (such as having fire as a Bane) - the subject’s Pattern won’t interact with fire in any way. This also renders the subject unable to benefit from the warmth generated by fire. Supernatural flames provoke a Clash of Wills to affect the subject."
          ]
        },
        {
          "id":84,
          "identity":{
            "name":"Spark (Forces ••)",
            "author":"by Menace"
          },
          "properties":{
            "practice":" Rulling",
            "primary factor":" Potency",
            "suggested rote skills":" Larceny, Science, Firearms"
          },
          "description":[
            "The mage can concentrate heat on a subject to create an instantaneous spark that might light a particularly flammable object, like gasoline fumes or a match (anything that could be lit on fire by a single spark) on fire."
          ]
        },
        {
          "id":85,
          "identity":{
            "name":"Stay Down (Forces ••)",
            "author":"by Moinen"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Potency",
            "withstand":" Stamina"
          },
          "description":[
            "A nice way to eliminate someone from a fight is to make him stay down. This spell veils gravitic forces from the target making it unable to maintain vertical position. As long as the spell is in effect the target can’t stand up."
          ],
          "others":[
            {
              "+1 Reach":" Rapid changes in apparent gravity gives penalty to actions that require focus equal to potency."
            }
          ]
        },
        {
          "id":86,
          "identity":{
            "name":"Surestep (Forces ••)",
            "author":"by Menace"
          },
          "properties":{
            "practice":" Rulling",
            "primary factor":" Duration",
            "suggested rote skills":" ?"
          },
          "description":[
            "The mage manipulates gravity and friction is such way that allows the subject to walk on any surface able to support his weight be it slippery ice or a rope stretched between two buildings. Ignore any relevant Tilts or Conditions."
          ],
          "others":[
            {
              "+2 Reach":" The subject can also freely walk on vertical surfaces."
            }
          ]
        }
      ],
      "disciple":[
        {
          "id":87,
          "identity":{
            "name":"Blazing Light (Forces •••)",
            "author":"by Justin Sane"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Potency",
            "suggested rote skills":" Occult, Science, [one more]"
          },
          "description":[
            "The light in the target area becomes blinding. Affected characters take a penalty to all rolls dependent on vision equal to the spell's Potency, and a -1 to all other actions due to pain and distraction."
          ],
          "others":[
            {
              "+1 Reach":" You can't dodge what you can't see. Subjects inside the affected area lose half their Defense."
            }
          ]
        },
        {
          "id":88,
          "identity":{
            "name":"Firewall (Forces ••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Shielding",
            "primary factor":" Duration",
            "suggested rote skills":" Crafts, Computer, Subterfuge"
          },
          "description":[
            "A shielding spell knows what harms its subject and prevents it. Much like how a Matter shielding spell can protect the mage from a caustic atmosphere and yet allow a normal one. So too does this spell prevent any harmful software and traffic from reaching its technological subjects while still allowing the harmless. Supernatural attempts to cause digital harm provoke a Clash of Wills."
          ]
        },
        {
          "id":89,
          "identity":{
            "name":"Form Blazing Sword (Forces •••)",
            "author":"by Five Eyes"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "suggested rote skills":" Athletics, Weaponry, Expression"
          },
          "description":[
            "The mage shapes and contains a source of energy into a melee weapon of elemental force; a campfire becomes a blade of flame, a concert provides a literal hammer of sound, or the mage enters a vampire's den armed with a spear of sunlight. The spell maintains the weapon's form and partially contains its energies, though the bearer suffers the full effects of continuous exposure. If the weapon is used to strike, it releases its stored energy into the target, as if they had spent a turn exposed to the source. The Potency of the effect determines how much energy may be contained in the weapon (as per the chart under Transform Energy), and each discharge reduces the remaining Potency of the effect by one, making future strikes less vicious or negating the spell altogether. The user's passive exposure does not reduce the spell's efficacy, however."
          ],
          "others":[
            {
              "+1 Reach":" The containment of the weapon is improved, and the user is no longer subject to its effects while bearing it."
            },
            {
              "+2 Reach":" Strikes do not reduce the Potency of the spell."
            },
            {
              "+1 Reach":" The weapon acquires a 'core' of kinetic energy that gains heft when swung. If the weapon is used in a Weaponry attack and strikes the target, this buffeting force inflicts bashing damage equal to the attack successes, in addition to the effects of exposure to the stored energy. Armor can reduce this impact damage, but generally does not help against the energy."
            },
            {
              "+2 Reach":" As above, and the core is more refined in shape; the weapon acquires the traits (equipment/initiative modifiers, Size, Strength requirement, etc.) of a weapon with a maximum equipment modifier of [Half Potency, round up.] While it still inflicts only bashing damage (including the weapon's modifier), it is in all other ways treated as the form copied - a flaming chain has the Grapple property, a flaming spear improves Defense and requires two hands to wield, and so on. As an instant action the mage may, if in range of the weapon, reconfigure it into another form within these limits."
            },
            {
              "+1 Reach":" The weapon may be thrown; it has range bands of (Potency x 10/Potency x 20/Potency x 40) and is aimed with Dexterity + Athletics - the target's Defense. A successful throw inflicts damage as a strike. If the weapon has a kinetic element (as above), a throw inflicts additional bashing damage on a successful hit. The 'thrown' energy splits off from the original weapon and dissipates upon impact, leaving the weapon itself still in the user's grasp."
            }
          ]
        },
        {
          "id":90,
          "identity":{
            "name":"Lei Gong's Raiment (Forces •••)",
            "author":"by Five Eyes"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "suggested rote skills":" Politics, Athletics, Intimidation"
          },
          "description":[
            "The mage harnesses a nearby source of electricity to wrap a subject in a crackling corona of lightning. While the spell anchors the aura and prevents an immediate discharge into the surroundings, anyone that moves or interacts with the subject after the aura is set suffers harm as if they'd come into contact with the power source. Unless they are shielded, this threatens the subject as well, who must remain still to avoid harm. The Potency of the effect determines how much charge can be settled into the aura (as per the chart under Transform Energy), and each discharge reduces the remaining Potency of the effect by one, making future strikes less vicious or negating the aura altogether."
          ],
          "others":[
            {
              "+2 Reach":" Strikes do not reduce the Potency of the spell."
            },
            {
              "+1 Reach":" The subject and aura's innate forces are harmonized to one another; the subject may move without harm. As a beneficial side effect, the subject is shielded from other sources of electricity, reducing their effective intensity by the Potency of the spell."
            },
            {
              "+2 Reach":" As above, and the aura exerts a modest 'lift' on the subject. As long as the spell's Potency (treated as Strength) is sufficient to lift the subject's weight, they may, as an instant action, jump-float at a Speed of (Gnosis + Potency)."
            },
            {
              "+1 Reach":" The subject may 'throw' the aura; it has range bands of (Potency x 10/Potency x 20/Potency x 40) and is aimed with Dexterity + Athletics - the target's Defense. A successful throw inflicts damage as a strike. If the subject is not protected in some way, they will be injured upon moving as usual. If the subject is being lifted by the aura (as in the +2 Reach option above), they may opt to 'ride' a throw to its destination, the lightning carrying them to a new position."
            }
          ]
        },
        {
          "id":91,
          "identity":{
            "name":"The Future Is Now (Forces •••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "suggested rote skills":" Crafts, Computer, Science"
          },
          "description":[
            "This spell allows computer hardware to go far beyond its limits. For every level of Potency double the hardware’s performance. For example, Potency 3 would be eight times the performance.",
            "This spell increases a computer's equipment bonus. For personal computers, this bonus is equal to Availability and normally ranges from +1 to +4. This spell doubles the bonus per level of Potency to a maximum of +4.",
            "Die bonuses for anything beyond the scale of PCs and similar devices are ST fiat. This includes things like supercomputers.",
            "For supercomputers, as a rule of thumb assume that they are about 10.000 times faster at the calculations they were designed for than your average pc. So, you’d need Potency 11 to bring an average PC up to supercomputer level. Using this spell on a supercomputer would probably result in record breaking performance."
          ]
        },
        {
          "id":92,
          "identity":{
            "name":"Lightning Javelin (Forces •••)",
            "author":"by Yelesom"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "suggested rote skills":" Streetwise, Crafts, Firearms"
          },
          "description":[
            "Grasp firmly the spear of lightning, and let it sunder your foes just surely. With this spell you can pull a charge of electricity out of a source and hold onto it. You can make a thrown attack while holding this charge. A success allows you to release any amount of that charge as damage. Any remainder stays in your grasp for another attack, unless you let go of it or the spell ends."
          ],
          "others":[
            {
              "+1 Reach":" Half Potency rounded up is added as bonus dice for the throwing attack."
            }
          ]
        },
        {
          "id":93,
          "identity":{
            "name":"Myopia (Forces •••)",
            "author":"by Dark Archon"
          },
          "properties":{
            "practice":" Fraying",
            "primary factor":" Potency",
            "suggested rote skills":" Science, Firearms, Crafts"
          },
          "description":[
            "Many people suffer from myopia, and with his spell mage can add his enemies to this list by disrupting light patterns near the enemy. This spell places a Myopic Condition on the enemy: -1 to all vision-related rolls per dot of Potency. Note that while his Defense suffers from this penalty, he still can use his full Defense for Dodge."
          ]
        },
        {
          "id":94,
          "identity":{
            "name":"Rewrite System (Forces ••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "suggested rote skills":" Crafts, Computer, Expression"
          },
          "description":[
            "With this spell a mage can change a system’s programming. This means she can rewrite existing programs or install wholly new ones. This can be used to create handy applications or to instantly give systems a virus or spyware. Changes are not instant. The spell gives the system all the information and commands needed to make the changes, but the system still needs time to install/apply these. The effects of this spell are Lasting which means that the changes made can be noticed.",
            "If the mage makes only subtle changes however apply the following rules for discovery by any users:",
            "- A knowledgeable user,  either about this specific system or about systems of this type in general, may make a reflexive Intelligence + Computer roll penalized by the mage's Computer Skill to discover any changes the mage made.",
            "- If the user is not familiar with the system, or failed the reflexive roll, but still suspects tampering they may make an extended Intelligence + Computer penalized by the Mage's Computer Skill to discover it."
          ],
          "others":[
            {
              "+1 Reach":" The effects of this spell take place instantly."
            }
          ]
        },
        {
          "id":95,
          "identity":{
            "name":"Strongman (Forces •••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "suggested rote skills":" Science, Athletics, Brawl"
          },
          "description":[
            "The mage may improve the strength of the kinetic forces used by the subject's body. This improves the subject’s Strength by Potency. This increase affects any Advantages or other traits derived from the Attribute’s level. The effects are subtle, though observers can detect subtle hints of changes to balance or strength of the body. Strength cannot be raised above the subject’s maximum (5 for normal human beings)."
          ],
          "others":[
            {
              "+1 Reach and 1 Mana":" By spending a point of Mana, the mage may raise Strength above the maximum rating for the subject."
            }
          ]
        },
        {
          "id":96,
          "identity":{
            "name":"Sunstone (Forces •••)",
            "author":"By Inodiv"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Crafts, Occult, Science"
          },
          "description":[
            "A Disciple of Forces can shape and harden sunlight into solid, three-dimensional forms. Sunstone has Durability 2, and a Weapon Rating/General Armor Rating/Equipment Bonus of 2. Sunstone reflects all forms of light incredibly brightly, appearing to radiate in even dimly lit rooms, but does not actually emit light on its own and provides no illumination. Sunstone counts as real sunlight for all purposes."
          ],
          "others":[
            {
              "+1 Reach":" The caster may create a sunstone out of any form of light. This functions as described above, including counting as real sunlight."
            }
          ]
        },
        {
          "id":97,
          "identity":{
            "name":"Superstimulus (Forces •••)",
            "author":"by Aristarkos"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "withstand":" Composure",
            "suggested rote skills":" Computer, Expression, Science"
          },
          "description":[
            "With this spell the mage uses light, sounds and other such stimuli to affect the perceptions and brain processes of the subject, producing a superstimulus powerful enough to override the will of the subject. This does not work on anything without a physical brain, so only humans and animals may be targeted. This cannot give fine mental manipulation but rather floods the target with a very strong stimulus that is hard to shake off or ignore. A raging animal can be made to flee by triggering its instincts to flight, a spider may weave its web in an inadequate environment or a rabbit may approach food despite obvious dangers. Only beings with a physical brain may be affected, and all supernatural creatures are unaffected.",
            "Last but not least, this spell only shapes stimuli to allow this manipulation to happen (in other words, it only provides the tool) but the mage herself has to do the actual manipulating. This might require a Manipulation + Empathy roll for affecting humans and Manipulation + Animal Ken to affect animals."
          ]
        }
      ],
      "adept":[
        {
          "id":98,
          "identity":{
            "name":"Burning Corpse (Forces ••••, Death ••••)",
            "author":"by Neros"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Occult, Weaponry, Intimidation"
          },
          "description":[
            "This spell turns something dead into scorching flames. Usually used to form dangerous zombies, they will function as normal except they will be burning with a strength equal to the spells Potency. The type of energy the subject is turned into does not have to be fire though."
          ],
          "others":[
            {
              "+1 Reach":" When the zombie dies it explodes. The size of the explosion is equal to the spells Potency in yards x2 and the damage is the same as the damage of the energy."
            }
          ]
        },
        {
          "id":99,
          "identity":{
            "name":"Digital Citizen (Forces ••••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Computer, Intimidation, Persuasion"
          },
          "description":[
            "With this spell the mage can temporarily make digital systems aid the subject regardless of the subject's actual skill in interacting with such devices. Systems will try to consider the subject's intentions rather than only following his physical inputs into the system. This spell doesn't actually increase the subject's knowledge, but effectively increases the subject's Computer Skill by Potency up to the normal maximum."
          ],
          "others":[
            {
              "+2 Reach and 1 Mana":" By spending a point of Mana, the Computer Skill may be raised above the normal maximum."
            }
          ]
        },
        {
          "id":100,
          "identity":{
            "name":"Hologram (Forces ••••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Craft, Science, Expression"
          },
          "description":[
            "The mage can bend light fields to create holograms. These holograms look like the real thing for all intents and purposes. But make no sound and any attempt to touch them will reveal they are not real but holograms."
          ],
          "others":[
            {
              "+1 Reach":" The holograms can now also create sound."
            },
            {
              "Add Death 3":" If a ghost is included in the spell's subjects, the ghost may control the holograms."
            },
            {
              "Add Mind 3":" If a goetia is included in the spell's subjects, the goetia may control the holograms."
            },
            {
              "Add Spirit 3":" If a spirit is included in the spell's subjects, the spirit may control the holograms."
            }
          ]
        },
        {
          "id":101,
          "identity":{
            "name":"Human Torch (Forces ••••, Life ••••)",
            "author":"by AmusedByIrony"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Athletics, Medicine, Science"
          },
          "description":[
            "The mage transmutes his flesh into fire, trusting his knowledge of Forces to keep the heat from burning vulnerable internal organs. Striking an opponent with a limb has an equivalent size (and base damage) of a torch (1), while grappling increases the amount of exposure to that of a bonfire (2). Each level of Potency increases the heat of the flames, to a maximum intensity of +3 (equivalent to molten metal). If the mage grapples an opponent (or is grappled) for two consecutive turns, the opponent ignites and is subject to the Burning Tilt. The mage is immune to heat and fire of equivalent or lesser intensity, including the Burning and Extreme Heat Tilts."
          ],
          "others":[
            {
              "+1 Reach":" The planes of force shielding you from the harmful effects of your own fire become more refined, protecting your worn armor and other equipment."
            },
            {
              "+1 Reach":" You can 'flare' your fiery nimbus into a column of superheated air, with explosive results. As an instant action, you can attack at short range with Dexterity + Athletics, using a weapon modifier equal to Potency. Opponents apply Defense, but the 'spread' of your attack is difficult to avoid, not unlike a shotgun; your roll benefits from 9-Again. Alternatively, you can use the explosive burst for propulsion, making a Strength + Athletics roll to jump and multiplying your successes by Potency."
            }
          ]
        },
        {
          "id":102,
          "identity":{
            "name":"Mass Distortion (Forces ••••)",
            "author":"by Dark Archon"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Potency",
            "suggested rote skills":" Science, Firearms"
          },
          "description":[
            "Cube-square law is a Lie. Yet Force mage can use this lie to his own advantage by making the mass of his enemy so huge that his own muscles and bones crush under the titanic weight of his body. This spell deals bashing damage equal to its Potency. This damage ignores all kinds of armor, including most Mage armor, with exception of Prime Armor. The damage also depends on a Size of a subject: -1 per unit of Size below 5, +1 per unit of Size above 5. This spell won't work on enemies who do not have any weight, including spirits, ghosts, immaterial Abyssal intruders, etc."
          ],
          "others":[
            {
              "+1 Reach and 1 Mana":" Mage increases the mass even further, literally collapsing the target with its own weight. The spell deals lethal damage."
            }
          ]
        },
        {
          "id":103,
          "identity":{
            "name":"Megacryometeor (Forces ••••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Science, Firearms, Survival"
          },
          "description":[
            "With this spell the mage changes the weather to cause a very large chunk of ice, a megacryometeor, to impact the current location of a chosen target. Megacryometeors are an actual real-life phenomenon. They weigh between 0.5 kilograms (1.1 lb.) to several tens of kilograms.",
            "The meteor will form in several minutes, the target location is set however. The meteor is thus easily avoided by moving around. Impact by the meteor deals 10 Lethal damage but can be reduced by Armor. When impacting objects the damage is (10 - Durability) in Structure."
          ],
          "others":[
            {
              "+2 Reach":" A megacryometeor in Brazil has been recorded to weigh in at more than 50 kilograms (110 lb.) and one in Scotland was reportedly 2 meters (6 ft. 7 in.) in size. Your meteor is now in the same class as these and can now deal even greater damage. 15 instead of 10."
            },
            {
              "Add Fate ••":" The impact location is no longer set. And will instead try to impact whatever target the mage desires. A roof or other such cover might still save the target however."
            }
          ]
        },
        {
          "id":104,
          "identity":{
            "name":"Illusion (Forces ••••) ",
            "author":"by Menace"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" ?"
          },
          "description":[
            "The mage manipulates light to create an mirage. The spell’s Scale factor determines the size of the mirage, while the mage can create one illusion per dot of Potency. It is fully sight dependent and static unless the caster actively spends a turn concentrating and controlling it."
          ],
          "others":[
            {
              "+1 Reach":" The illusion also has audible effects."
            },
            {
              "+1 Reach":" The mage can program the illusion to change and move in a predetermined way."
            },
            {
              "+2 Reach, Add Mind •••":" Not only is the illusion mobile, but it is capable of reacting to what's happening around it in a basic way the same way something it represents would react. For instance, an illusion of a person might bleed when shot or an illusion of a cat might flee if someone approaches."
            }
          ]
        },
        {
          "id":105,
          "identity":{
            "name":"Technostress (Forces ••••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Unraveling",
            "primary factor":" Duration",
            "withstand":" Composure",
            "suggested rote skills":" Computer, Stealth, Subterfuge"
          },
          "description":[
            "In the face of ever more ubiquitous recording devices and a greater ability for people to communicate with one another, the Guardians often have a difficult time protecting the Veil. But the Guardians have ways of denying people these advantages, such as this spell.",
            "With this spell the mage can temporarily make digital systems oppose the subject. Every system and device that the subject uses will start having problems or otherwise do anything but what the subject requires.",
            "This prevents the subject from gaining any aid from electronic devices whatsoever."
          ]
        },
        {
          "id":106,
          "identity":{
            "name":"Transportation (Forces ••••, Matter ••••)",
            "author":"by HTaiji"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Potency",
            "withstand":" Durability",
            "suggested rote skills":" Science, Crafts, Occult"
          },
          "description":[
            "By understanding that all matter is but energy bundled together and bound in a physical form, the Mage can turn Matter into a data stream which can then be transmitted to another point to be re-materialized."
          ],
          "others":[
            {
              "+1 Reach":" The Mage can store the data stream to be used later."
            },
            {
              "+1 Reach":" The Mage can use free-floating energy (such as light, heat, etc.) to Replicate objects."
            },
            {
              "+2 Reach":" The Mage can now use this spell to Replicate food as per the previous reach option."
            }
          ]
        }
      ],
      "master":[
        {
          "id":107,
          "identity":{
            "name":"Neo-Luddite (Forces •••••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Unmaking",
            "primary factor":" Potency",
            "suggested rote skills":" Occult, Science, Survival"
          },
          "description":[
            "Within the area of the spell the mage destroys all manifestations of electromagnetic forces that are commonly used in technology. Electric currents, wireless transmissions, lasers, etc.",
            "This spell is used in a process called 'rewildening' by a Free Council anarcho-primitivist philosophy that supposes that technology is purely an instrument of the Lie and that the future Atlantis will be ruled by magic utterly without technology."
          ],
          "others":[
            {
              "Add Matter •••••":" This spell also destroys any manifestation of advanced materials. This could be plastics as well as any alloy more advanced than bronze. Although the specifics depend on the mage casting the spell."
            }
          ]
        },
        {
          "id":108,
          "identity":{
            "name":"Social Engineering (Forces •••••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Making",
            "primary factor":" Potency",
            "suggested rote skills":" Politics, Socialize, Subterfuge"
          },
          "description":[
            "Social media facilitates the creation and sharing of information and ideas, with this spell the mage creates social networks where none existed before. The mage chooses a target organization or group and fabricates a favorable digital history between the mage and the target. How this history looks is entirely up to the mage, maybe records show the mage has worked there, that he is an important customer or that he has an appointment at three. None of this history actually happened of course and people won't recognize the mage. But so long as the mage pretends it did, and nobody calls his bluff, they may make use of these organizations as the Merits Allies, Contact, Status or even Resources. For each level of Potency, the subject gains one dot in one of the following Merits: Allies, Contacts, Status or Resources."
          ],
          "others":[
            {
              "Drawback":" This spell takes advantage of the fact that in large organizations nobody can know everybody. Consequently, this spell cannot be used effectively on smaller groups as they are far more likely to see through your ruse."
            }
          ]
        }
      ]
    }
  },
  {
    "life":{
      "initiate":[
        {
          "id":109,
          "identity":{
            "name":"Ølrunar (Ale-runes) (Life •)",
            "author":"by EW-Mathias"
          },
          "properties":{
            "practice":" Compelling",
            "primary factor":" Duration",
            "suggested rote skills":" Craft, Survival, Science"
          },
          "description":[
            "This spell allows the mage to exert control over the microorganisms involved in the process of fermentation and thus exert an incredible level of control over the entire process. The name is taken from old poems about runes enchanting ales, but it works on anything that is created by the fermentation of organic materials. This spell must be cast before beginning the process, and as long as it is still active once the process is successfully finished, add this spell’s Potency to the finished product’s die bonus and Availability rating."
          ]
        },
        {
          "id":110,
          "identity":{
            "name":"Sense Life (Life •)",
            "author":"by Dark Archon"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Duration",
            "suggested rote skill":" ?"
          },
          "description":[
            "The hunter knows the jungle by sight, hearing, and smell. This spell goes further and detects the very feeling of being alive: heartbeat, breathing and desire to be alive. This spell tells the mage, if something alive enters the area of spell and gives the location of it."
          ],
          "others":[
            {
              "+1 Reach":" The mage knows the general well being of person who enters the area - it's Health and Conditions like Tired, Poisoned, etc."
            },
            {
              "+1 Reach":" The mage knows the amount of dots in Physical attributes of the person who is entering the area."
            },
            {
              "+1 Reach":" The mage knows the specific amount of dots in one Physical attribute of the person who is entering the area."
            }
          ]
        },
        {
          "id":111,
          "identity":{
            "name":"Spider Sense (Life •)",
            "author":"by Neros"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Duration",
            "suggested rote skills":" Medicine, Survival, Animal Ken"
          },
          "description":[
            "By keeping tap on the adrenalin levels in living beings around her, the subject becomes more aware of those who would bring her harm. The subject gains a bonus to notice dangers like ambushes or someone feeling highly aggressive, equal to the spell's Potency. Logically, this spell won’t alert the subject when the beings aren't alive."
          ],
          "others":[
            {
              "+1 Reach":" When a fight breaks out, the subject is able to get that extra advantage. If a fight starts while this spell is active, the subject also gains a bonus to Initiative equal to the spell's Potency."
            }
          ]
        },
        {
          "id":112,
          "identity":{
            "name":"Stabilize (Life •)",
            "author":"by Pebbles"
          },
          "properties":{
            "practice":" Compelling",
            "primary factor":" Potency",
            "suggested rote skills":" Medicine, Athletics, Survival"
          },
          "description":[
            "If a character is gravely wounded ,they might undergo surgery under Sleeper care to stabilize (If bleeding out) or simply help them recover. The roll is an extended Medicine + Intelligence roll once per hour with successes equal to boxes of damage (See WoD p.96) Potency of this spell counts as successes already gained on this roll greatly increasing the chances of such an action succeeding within the time limit.",
            "It's subtle enough to not be noticed even under direct scrutiny of sleepers, Rates of bleeding from major arteries slow but don't heal, organs continue to function with diminished blood where they might otherwise shut-down."
          ]
        }
      ],
      "apprentice":[
        {
          "id":113,
          "identity":{
            "name":"Apparent Juggernaut (Life ••)",
            "author":"by Pale_Crusader"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Potency",
            "withstand":" Stamina",
            "suggested rote skills":" Athletics, Brawl, Weaponry"
          },
          "description":[
            "The target of this spell appears to be immune to damage. Attacks that strike the target seem like they leave no injury. Enveloping all the senses, someone swinging, and hitting with a sword would feel the impact of the blow and hear the cry of his target, but wouldn't perceive the defender being wounded or impaired by the strike. The actual attack is resolved normally despite the perception of it. Likewise blood splatter from injuries is veiled until either the spell ends or end of scene, whichever happens first. If the blood pools cause Environmental Tilts due to slipperiness, attempts to resist those tilts must be rolled twice, taking the lower of the two rolls. Note perception of clothing and armor is unaffected by this spell.",
            "This spell doesn't fool the one actually getting attacked (the target of the attack still knows, and feels, the full damage of the attack)."
          ],
          "others":[
            {
              "+1 reach":" The caster can now reflexively decide if an attack looks like a miss or a hit."
            },
            {
              "+1 reach":" This spell fools even the one getting attacked and they don't suffer Wound Penalties ( the ST should keep his Health Boxes a secret )."
            }
          ]
        },
        {
          "id":114,
          "identity":{
            "name":"Beta Consilium (Life ••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "withstand":" Stamina",
            "suggested rote skills":" Medicine, Science, Persuasion"
          },
          "description":[
            "This spell interferes with the subject’s reproductive system, preventing conception when used prior to copulation. This must be cast before the act to take effect, and the Duration must cover the entirety of the pairing. This may be cast on either participating party; it’s not necessary to cast this on both. When cast over an exceedingly long Duration, this can be used to render a subject effectively infertile - voluntarily or otherwise."
          ],
          "others":[
            {
              "+1 Reach":" This may be cast anytime in a scene immediately following a pairing, instead of before, though in this case it only functions on a female participant. This inflicts the Nausea condition on the subject, which remains until resolved."
            },
            {
              "+2 Reach":" As above, but the subject does not gain the Nausea condition."
            }
          ]
        },
        {
          "id":115,
          "identity":{
            "name":"Biological Invisibility (Life ••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Duration",
            "suggested rote skills":" Medicine, Stealth, Subterfuge"
          },
          "description":[
            "By means of this spell, the mage blinds the eyes, ears, and other senses of living creatures to her subject’s presence: no living creature can perceive her through any of the mundane senses. Supernatural senses employed by living beings provoke a Clash of Wills."
          ]
        },
        {
          "id":116,
          "identity":{
            "name":"Deaden Nerves (Life ••)",
            "author":"by EW-Mathias"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Potency",
            "withstanding":" Stamina",
            "suggested rote skills":" Empathy, Medicine, Occult."
          },
          "description":[
            "Pain travels along the nervous system and into the brain. You can stop the subject from feeling pain in several different ways. One of the most efficient ways is to deaden the nerves and thus stopping the pain at the source. This spell does just that. It deadens the nerve, preventing the impulses from reaching the brain. The subject ignores a dice of wound penalties for each Potency. Also, he suffers a penalty equal to Potency for any physical action from reduced feedback."
          ],
          "others":[
            {
              "+1 Reach":" Alternatively, the subject may ignore one physical Tilt for each Potency."
            },
            {
              "+1 Reach":" The mage can exert greater control over which nerve feedback it numbs, allowing him to either numb pain without losing tactile feedback, or vice versa."
            }
          ]
        },
        {
          "id":117,
          "identity":{
            "name":"False Health (Life ••)",
            "author":"by Neros"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Duration",
            "suggested rote skills":" Medicine, Brawl, Subterfuge"
          },
          "description":[
            "The subject's health seems to be fine even if it is actually suffering from wounds, diseases or toxins. If it is already suffering from wounds, these seem to cover up and bruises fade. If the subject is bleeding out (Health full of lethal), this power does not prevent the bleeding. ​You may also instead seem hurt, even though you are not.",
            "If the subject contains any toxins and is tested with mundane means or with Matter; the toxins can be detected (unless Matter 2 is also used in casting of this Rote), but the subject's body will still seem fine. Supernatural senses that can scan the subject's health triggers a Clash of Will as normal."
          ],
          "others":[
            {
              "+1 Reach":" The subject can seem much healthier than it looks. Add the spell's potency as fake bonus Stamina. No bonus is gained from this extra Stamina."
            }
          ]
        },
        {
          "id":118,
          "identity":{
            "name":"Gladiator's Glare (Life ••)",
            "author":"by Arduras"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Duration",
            "suggest rote skills":" Athletics, Brawl, Firearms"
          },
          "description":[
            "The Potency of this spell is applied as a bonus to your next physical roll provided you aim for a turn sacrificing your defense beforehand. Similar to Perfect Timing but in this case it's tuning your senses (including your kinesthetic sense) alongside your reflexes, adrenaline, and any other subtle bodily processes to the task."
          ]
        },
        {
          "id":119,
          "identity":{
            "name":"Hibernation (Life ••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "withstand":" Stamina",
            "suggested rote skills":" Medicine, Science, Persuasion"
          },
          "description":[
            "This spell causes the living subject to immediately fall into a deep sleep, and prevents them from being roused for the Duration. Subjects that do not normally need to sleep are not affected by this spell. If the target sleeps for long enough to recover willpower under normal rules, then they recover it normally. Supernatural attempts to rouse the subject provoke a Clash of Wills."
          ],
          "others":[
            {
              "+1 Reach":" For each point of Potency, the subject halves the amount of rest they require for all purposes while slumbering, including Willpower recovery. Additionally, the subject may recover multiple points of Willpower while sleeping due to this spell."
            },
            {
              "+1 Reach":" This spell may affect living subjects that do not normally require sleep."
            },
            {
              "+2 Reach":" The subject does not require food or water, or any other sustenance, while hibernating."
            }
          ]
        },
        {
          "id":120,
          "identity":{
            "name":"Invisible Fence (Life ••)",
            "author":"by Yelesom"
          },
          "properties":{
            "practice":" Shielding",
            "primary factor":" Duration",
            "suggested rote skills":" Animal Ken, Survival, Intimidation"
          },
          "description":[
            "You can make an area or perimeter feel unwelcome on a primal level. The instincts flare and the need to flee overcomes the desire to progress. Living creatures can’t enter the area, or cross a boundary, affected by this spell, if they don’t on a Composure + Supernatural Tolerance roll penalized by the spell's Potency."
          ],
          "others":[
            {
              "+1 Reach":" A failed check imposes the Spooked Condition on the creature."
            },
            {
              "Add Fate •":" The mage can select a number of subjects, based on scale, that may pass unhindered."
            }
          ]
        },
        {
          "id":121,
          "identity":{
            "name":"Predator’s Cloak (Life ••)",
            "author":"by Neros"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Duration",
            "suggested rote skills":" Science, Stealth, Streetwise"
          },
          "description":[
            "The best way to move among the Sleeping masses is to not be seen at all. The subject is shrouded from being noticed by living beings and Life magic. Any supernatural effect that would detect her provokes a Clash of Wills.",
            "This spell does not prevent those around her from noticing the effects of the subject’s passing, like speaking, stepping on grass, etc. Which in the case of Sleepers, could trigger Dissonance."
          ],
          "others":[
            {
              "+1 Reach":" The target of the spell leaves no scent trail."
            }
          ]
        },
        {
          "id":122,
          "identity":{
            "name":"Transplant (Life ••)",
            "author":"by Menace"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Duration",
            "suggested rote skills":" Medicine, Animal Ken, Survival"
          },
          "description":[
            "Regrowing lost limbs and organs is moderately difficult with Magic but with the advent of modern transplantology it wasn't long till Mages found an easier way. This spell allows to transplant a part of a body from one person to another. The magic used in the spell means that unlike mundane transplants you don't have to worry about rejection, immunosuppressants or rehab, the 'new' part is fully functional from the get go. Parts must be taken from still living subjects."
          ],
          "others":[
            {
              "+ 1 Reach":" Parts can be taken from a recently dead person."
            },
            {
              "+ 2 Reach":" Parts might come from a different species, for instance the Mage can implant a predator’s claw in place of the subject's hand. For specific effects this might grant, check the spell 'Transform Life' (MtAw Core pg.150)."
            }
          ]
        },
        {
          "id":123,
          "identity":{
            "name":"Warden of Life (Life ••)",
            "author":"by Neros"
          },
          "properties":{
            "practice":" Shielding",
            "primary factor":" Duration",
            "suggested rote skills":" Academics, Brawl, Expression"
          },
          "description":[
            "The body isn’t just meat and bones; it is a vessel for the soul. With this spell a mage can protect the subject’s living pattern, or the pattern of living beings in the area, from being tampered with by the Life Arcana. Any attempt to alter the subject’s living pattern must succeed at a Clash of Wills."
          ],
          "others":[
            {
              "+1 Reach":" Magic and powers from other supernatural beings that would alter the living pattern of the subject are likewise affected."
            },
            {
              "+1 Reach":" The mage may specify a Key that allows the subject's pattern to be altered."
            },
            {
              "+2 Reach":" The protection afforded by this spell extends to physical attacks from living beings, where the attacker suffers the potency of the spell as a penalty. This protection doesn't work if inanimate objects are used, like swords, clubs, ect."
            }
          ]
        }
      ],
      "disciple":[
        {
          "id":124,
          "identity":{
            "name":"Addictive Fluids (Life •••)",
            "author":"by Flinty, in 'Flintys Homebrew Hub 2e' "
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "withstand":" Stamina",
            "suggested rote skills":" Medicine, Survival, Persuasion"
          },
          "description":[
            "The mage turns a bodily fluid (e.g. saliva, blood) into an extremely addictive substance. When another subject consumes the substance, they risk getting addicted to it. Only bodily fluids enchanted with this spell will quell the subject's needs."
          ],
          "others":[
            {
              "+1 Reach":" In Social Maneuvering the source of the enchanted fluid will automatically remove Potency doors against someone addicted to her."
            }
          ]
        },
        {
          "id":125,
          "identity":{
            "name":"Analgesia (Life •••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Medicine, Survival, Empathy"
          },
          "description":[
            "The caster enhances the rewiring of the subject’s nervous system, rendering them unable to feel pain. The subject ignores all wound penalties, and ignores all other effects of pain. Supernatural attempts to inflict pain directly provoke a Clash of Wills."
          ]
        },
        {
          "id":126,
          "identity":{
            "name":"Battle Body (Life •••)",
            "author":"by Neros"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Potency",
            "suggested rote skills":" Medicine, Athletics, Intimidation"
          },
          "description":[
            "The subject’s body becomes better at withstanding attempts to hamper or harm its functionality. Attempts to inflict most physical Tilts must overcome the usual resistance (usually Stamina) + the spell’s Potency."
          ],
          "others":[
            {
              "+1 Reach":" The subject becomes more resistant to cruder attempts to harm it. Add the spell's Potency to its Health."
            },
            {
              "+2 Reach":" The subject’s senses and reflexes become enhanced to such a degree that it allows them to land precise blows and react to opportunities. It gains a dice bonus to Brawl rolls equal to the spells Potency. This is not a weapon bonus."
            }
          ]
        },
        {
          "id":127,
          "identity":{
            "name":"Blunt Blessing (Life •••)",
            "author":"by Arduras"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration"
          },
          "description":[
            "Gain Potency as temporary health for the duration of the spell. Not the same as granting attribute dots or anything drastic, just increasing a trait for a while that might buy you some precious time between you and the great beyond. Likely requires 1 reach and 1 mana to even use since your health is by nature at its 'cap'."
          ]
        },
        {
          "id":128,
          "identity":{
            "name":"Channel Vitae (Life •••)",
            "author":"by Tessie"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "withstand":" Composure (or Resistance for Strix)",
            "suggested rote skills":" Intimidation, Occult, Survival"
          },
          "description":[
            "This spell allows the mage to draw Vitae into her Pattern from a collection of Vitae (such as Vitae infused blood or shadow), or from her Pattern to a vampire, Strix, or suitable receptacle. The mage may transfer an amount of Vitae equal to the spell’s Potency. However, she cannot channel more Vitae per turn than her Gnosis-derived Mana per turn rate.",
            "Vitae stored within the mage’s Pattern remains even after the Duration expires; however, she can only hold a combined amount of Mana and Vitae equal to her Gnosis-derived maximum Mana."
          ],
          "others":[
            {
              "+1 Reach":" The mage may ignore her Mana per turn limit, channeling as much Vitae as she desires as an instant action."
            },
            {
              "+1 Reach":" The mage may siphon Vitae directly from a vampire or Strix, though they may Withstand the spell with Stamina or Resistance respectively. The Vitae channeled comes in the form it is bound in; blood for vampires and smoke-like shadow matter for Strix, and as such cannot be directly drawn into the mage's Pattern without additional Potency or a second application of this spell."
            },
            {
              "+1 Reach":" The mage may spend Vitae to heal herself or another living subject of two points of bashing or one point of lethal per Vitae."
            }
          ]
        },
        {
          "id":129,
          "identity":{
            "name":"Channel Vitae II (Life •••)",
            "author":"by projectmoon "
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "withstand":" Stamina (or Resistance)",
            "suggested rote skills":" Intimidation, Occult, Survival"
          },
          "description":[
            "The mage is able to channel Vitae between herself and vampires, strix, ghouls, other living targets, or inanimate receptacles.The spell allows the mage to move a quantity of Vitae up to the spell's Potency between one or more vessels she can touch, including herself, vampires, ghouls, strix, other living targets, or physical containers. Transferring the vitae into a subject forces the effects of Vitae consumption upon it: vampires gain more Vitae, living targets may become ghouls, and so forth. If the Vitae is transferred into a container, it maintains its nature as Vitae for the Duration of the spell before reverting to normal blood.",
            "The mage may channel a number of points of Vitae per turn equal to her Gnosis-derived Mana per turn limit."
          ],
          "others":[
            {
              "+1 Reach":" The mage may channel as much Vitae as she wants in one turn, ignoring her Gnosis-derived Mana per turn limit."
            },
            {
              "+1 Reach and 1 Mana":" When the Vitae is transferred into a subject, the effects of the Vitae are suppressed for the Duration of the spell. This effect suppresses the effects of Vitae for one subject, and can be applied multiple times."
            }
          ]
        },
        {
          "id":130,
          "identity":{
            "name":"Feral Grit (Life •••)",
            "author":"by Arduras"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "suggested rote skills":" Athletics, Brawl, Survival"
          },
          "description":[
            "Normally your defense is reduced by 1 per attack after the first. Add the potency of this spell to the number of attacks before you suffer a penalty as you manipulate your reflexes and senses to respond with the speed of an animal, impulsive and unhindered by slow, rational assessment."
          ]
        },
        {
          "id":131,
          "identity":{
            "name":"Societal Adaptation (Life •••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "suggested rote skills":" Medicine, Socialize, Subterfuge"
          },
          "description":[
            "All of human interaction is underwritten by a constant stream of instinctual responses and unconscious ticks - our society is as much a product of our biology as it is a product of the mind. A Disciple of Life can enhance the social instincts that drive her subject, making her keenly (and consciously) aware of the subtle body language that drives human interaction. This spell provides its subject a bonus on all social rolls to detect a living human’s intentions equal to Potency, for a number of rolls equal to Potency. This also applies to rolls to detect lies."
          ]
        },
        {
          "id":132,
          "identity":{
            "name":"Stop the Biological Clock (Life •••, Time ••)"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Medicine, Occult, Science"
          },
          "description":[
            "The Mage alters the functionality of the target's biological patterning, ensuring that while all normal biological functions are performed as normal, cells replicate perfectly, avoiding the ravaging effects of time, and ensuring that the biological aging process is halted. The practical upshot of this is that while the Mage's body otherwise functions exactly as it normally would, she does not biologically age. This will not halt the effects of cancers, diseases, poisons or other maladies of the form, nor will it stop the psychological effects of aging, however it will work to counteract certain mental afflictions with a physical aspect, such as dementia.",
            "This spell is a quick and easy, albeit risky way to embrace the path of Lichdom. Its use is not considered quite as inherently threatening as the other forms of Lichdom, due to their inherently inhuman nature. However it is seen as something of a gateway-spell to those later paths, as the Mage grows older and starts to obsess over the threat of untimely death. As such, while some merely use it to enhance their quality of life for as long as reasonable, you can never truly trust them not to start body snatching or resorting to more permanent, and less dispellable methods. What's more, should the spell be dispelled, the cumulative weight of all of those years of time come crashing down upon the Mage.",
            "For this reason, some Mage have developed their own Legacies based on this spell, to avoid such eventualities. Such Mages are almost uniformly declared as Liches. This does not however stop them from accumulating small cults of worshippers, enchanted by the possibility of eternal life, willing to bind themselves forever to the desires of their Master, only to later realize that he could render them crippled or dead with but a thought, as he removes his blessing."
          ]
        }
      ],
      "adept":[
        {
          "id":133,
          "identity":{
            "name":"Boneitis (Life ••••)",
            "author":"by Yelesom"
          },
          "properties":{
            "practice":" Patterning",
            "withstand":" Stamina",
            "primary factor":" Duration",
            "cost":" 1 Mana",
            "suggested rote skills":" Medicine, Athletics, Intimidation"
          },
          "description":[
            "By causing muscles to tug and tense as hard as they can in all sorts of directions, you can get the human body to crush its own bones in a twisted dance of snapping and popping. This applies the Arm Wrack or Leg Wrack Conditions to your subject at intervals determined by your Gnosis-based casting time. Additionally it causes one point of Lethal damage each time a Condition should be applied."
          ],
          "others":[
            {
              "+1 Reach":" The bones get in on the action and start to tear at other body tissues with their own volition. This spell does an additional point of Lethal each time a Condition should be applied."
            },
            {
              "+1 Reach and 1 Mana":" For one point of Mana, you make the effects of this spell supernaturally contagious. Others within the vicinity of the subject when a Condition should be applied resist infection with Stamina + Supernatural Tolerance vs the spell's Potency(?). An Exceptional Success on a roll to resist grants immunity for the remaining Duration of the spell."
            }
          ]
        },
        {
          "id":134,
          "identity":{
            "name":"Gestalt form (Life ••••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" Stamina",
            "suggested rote skills":" Medicine, Occult, Science"
          },
          "description":[
            "This spell allows two or more living beings to fuse into one, creating a fused life form. The minds of the subjects fuse together forming a new merged personality with access to all the memories, knowledge and Skills of the subjects. The mage may determine which Attributes and appropriate Merits the being inherits. No Attribute can be higher than the highest level of that Attribute found among the subjects.",
            "If the subjects are all of the same supernatural template, then this template remains preserved after the fusion. The mage must determine what abilities the fused being has, again, no ability can be higher than the highest among the subjects. If the subjects are of differing templates then the mage determines which one template the fused being becomes, only the abilities specific to that template can be inherited.",
            "A mage can only have so many spells active, when fusing mages determine which spells will be under the new entity's spell control.",
            "Once the Duration ends the subjects return to normal and any damage sustained is split equally among all subjects regardless of how much damage they had before. Willpower values are unchanged from their pre-merger values.",
            "Memories of the time spent fused will seem distant and hazy, dreamlike, but the subjects will remember the experience to some degree."
          ],
          "others":[
            {
              "Add Mind 4 ••••":" The mage may determine to which of the subjects' memories, knowledge and Skills the fused being has access to."
            }
          ]
        },
        {
          "id":135,
          "identity":{
            "name":"Vampirism (Life ••••)",
            "author":"by projectmoon"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Potency",
            "cost":" 1 Mana",
            "withstand":" Stamina (or Resistance)",
            "suggested rote skills":" Brawl, Intimidation, Persuasion"
          },
          "description":[
            "The mage patterns the blood of a living subject into vampiric Vitae and draws it from the victim.The Vitae drawn is usually in the form of blood oozing from wounds, but can be a more exotic substance, depending on the method the mage uses to 'feed' on the subject. This spell generates one Vitae per Potency and deals 1 Lethal damage per Potency to the subject. The Vitae created is treated as if it came from the subject.",
            "The Vitae remains supernatural until the Duration of the spell expires, at which point it turns back into regular substance, unless it has been consumed. The use of this spell is an affront to the vampiric Curse, and damns the mage: the mage takes 1 resistant Lethal damage per Potency of the spell."
          ],
          "others":[
            {
              "+1 Reach":" The mage may explicitly specify the properties of the created Vitae, such as quality, addictiveness, and whether or not the Vitae can form blood bonds. Any effects dependent on another subject (such as blood bonds) require that subject to be included as a target in the spell."
            },
            {
              "+1 Reach":" The created Vitae violates its own nature. This effect allows the mage to specify paradoxical properties, such as animal-quality Vitae of human origin, or allows the Vitae to form a blood bond with a living target (including the mage themselves)."
            },
            {
              "+1 Reach":" The mage may somewhat bypass the debt of the Curse. The damage inflicted to the mage is Bashing, instead of Lethal. Additionally, for one Mana, the damage inflicted to the mage is non-Resistant."
            },
            {
              "Add Death, Mind, or Spirit ••••":" The Mage may draw from ghosts (Death), goetia (mind), or spirits (Spirit)."
            },
            {
              "Add Prime ••••":" The Mage can convert the Vitae into tass in a form of her choosing. The tass functions both as Vitae and Mana, and if ingestible, can be consumed by Vampires. The tass created has the resonance keyword of 'vampirism'."
            }
          ]
        },
        {
          "id":136,
          "identity":{
            "name":"Vitae Drain (Life ••••)",
            "author":"by Tessie"
          },
          "properties":{
            "practice":" Unraveling",
            "primary factor":" Potency",
            "suggested rote skills":" Brawl, Intimidation, Persuasion"
          },
          "description":[
            "The mage drains the very life energies that sustain a living Pattern. This involves rending that Pattern, causing horribly painful internal wounds and nonspecific tissue damage. This is an attack spell, inflicting lethal damage equal to its Potency. In addition the spell generates an amount of Vitae equal to the damage inflicted, drawing it into her Pattern, however, she can only hold a combined amount of Mana and Vitae equal to her Gnosis-derived maximum Mana."
          ],
          "others":[
            {
              "+1 Reach":" The mage draws Vitae from the target in physical form. The damage inflicted is due to blood loss as the victim hemorrhages Vitae-filled blood that seeps from a wound or orifice of the mage's choice, instead of being drawn into the mage's Pattern. Can only be used on living victims."
            },
            {
              "+1 Reach and add Death ••":" The mage draws Vitae from the target in shadow form. The damage inflicted causes internal wounds and unspecified tissue damage as Vitae-filled shadowy smoke flows from a wound or orifice of the mage's choice, instead of being drawn into the mage's Pattern. Can only be used on living victims."
            },
            {
              "+1 Reach":" By carefully unraveling the victim's Pattern the mage causes two points of bashing damage per Potency instead of lethal."
            },
            {
              "Add Arcanum ••••":" the mage can cast this spell on ephemeral, supernal or nonliving beings under the Arcanum's purview. For example Death for ghosts, vampires and Strix, Mind for goetia, Spirit for spirits and werewolves, and Prime for supernal entities."
            }
          ]
        },
        {
          "id":137,
          "identity":{
            "name":"Wrack (Life ••••)",
            "author":"by Yelesom"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "cost":" 1 Mana",
            "withstand":" Stamina",
            "suggested rote skills":" Medicine, Athletics, Intimidation"
          },
          "description":[
            "By causing muscles to tug and tense as hard as they can in all sorts of directions, you can get the human body to crush its own bones in a twisted dance of snapping and popping. This applies the Arm Wrack or Leg Wrack Tilts to your subject at intervals determined by your Gnosis-based casting time. Additionally it causes one point of Lethal damage each interval."
          ],
          "others":[
            {
              "+1 Reach":" The bones get in on the action and start to tear at other body tissues with their own volition. This spell does an extra point of Lethal each interval. \t"
            },
            {
              "+1 Reach":" Treat the casting mage's Gnosis as 2 higher for the purposes of ritual interval for this spell."
            }
          ]
        }
      ],
      "master":[
        {
          "id":138,
          "identity":{
            "name":"Create Vitae (Life •••••)",
            "author":"by projectmoon"
          },
          "properties":{
            "practice":" Making",
            "primary factor":" Potency",
            "cost":" 1 Mana",
            "withstand":" Blood Potency, Stamina, or Resistance (depending on target)",
            "suggested rote skills":" Empathy, Medicine, Occult"
          },
          "description":[
            "The spell creates an amount of pure, inert Vitae equal to Potency in the subject, which may be a vampire, strix, living target, or container. If created outside of an animate subject, the mage chooses the form the Vitae takes (and must have a way to contain the resulting Vitae), and the spell is Withstood by the mage's own Stamina.",
            "Vitae created by this spell is not addictive. Furthermore, the vitae created by this spell can sustain a vampire of any Blood Potency. The Vitae created by this spell becomes a normal substance after the Duration expires, unless it has been consumed. As always, the vampiric curse takes its debt: the mage suffers 1 resistant Lethal damage per point of Potency of the spell."
          ],
          "others":[
            {
              "+1 Reach":" The mage may explicitly specify the properties of the created Vitae, such as quality. With the proper knowledge, the mage can duplicate Vitae that originates from a specific person or vampire."
            },
            {
              "+1 Reach":" The mage may somewhat bypass the debt of the Curse. The damage inflicted to the mage is Bashing, instead of Lethal."
            },
            {
              "+1 Reach and 1 Mana":" The mage may bypass the debt of the Curse by substituting Mana for suffering. The damage inflicted to the mage is non-Resistant."
            },
            {
              "Add Prime •••••":" The Mage can create the Vitae as tass in a form of her choosing. The tass functions both as Vitae and Mana, and if ingestible, can be consumed by Vampires. The tass created has the resonance keyword of 'vampirism.'"
            }
          ]
        },
        {
          "id":139,
          "identity":{
            "name":"Vitae Fountain (Life •••••)",
            "author":"by Tessie"
          },
          "properties":{
            "practice":" Making",
            "primary factor":" Potency",
            "suggested rote skills":" Empathy, Medicine, Occult"
          },
          "description":[
            "This spell generates a quantity of Vitae equal to the spell’s Potency within the subject’s Pattern."
          ],
          "others":[
            {
              "+1 Reach":" This spell generates the Vitae in physical form. Instead of forming inside the subject's Pattern the Vitae forms a pool of thick blood. When the spell’s Duration expires, so does the created Vitae."
            },
            {
              "+1 Reach and add Death ••":" This spell generates the Vitae in shadow form. Instead of forming inside the subject's Pattern the Vitae forms a cloud of shadowy smoke. When the spell’s Duration expires, so does the created Vitae."
            }
          ]
        },
        {
          "id":140,
          "identity":{
            "name":"Mana Vine (Life •••••, Prime ••• )",
            "author":"by Enlightened_Milkman"
          },
          "properties":{
            "practice":" Making",
            "primary factor":" Duration",
            "suggested rote skills":" Medicine, Science, Survival"
          },
          "description":[
            "Highly valued for producing wine, pastries, jams, or eating out of hand, the cultivation of this plant is a large source of income in more rural Consilium. It's important enough that most are willing to turn a blind eye to the troublesome nature of the plant. The spell creates an infestation of thick thorny vines which grow outwards until they've completely encircled a Hallow. Afterwards the plant absorbs Potency points of Mana per day up to the limits of the Hallow. The plant produces a single fleshy fist sized fruit pod per day which can be consumed to restore mana equivalent to the amount absorbed. Harvesting the fruit will most likely require additional magic as the plant will violently defend itself from harvest or destruction. If the Hallow goes inactive the plant will wither and die."
          ],
          "others":[
            {
              "+1 Reach":" The plant is fertile and will spread its seeds to other nearby Hallows."
            },
            {
              "+2 Reach":" The spell is Lasting."
            }
          ]
        }
      ]
    }
  },
  {
    "matter":{
      "initiate":[
        {
          "id":141,
          "identity":{
            "name":"Sense Pressure (Matter •)",
            "author":"by Dark Archon"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Duration",
            "suggested rote skills":" ?"
          },
          "description":[
            "This spell is different from others in regard that it isn't cast on an Area, but on the Structure of the target object; the mage can feel pressure on structure material and detect location of creatures who move inside of it."
          ],
          "others":[
            {
              "+1 Reach":" The mage knows Size and approximate mass of being who is entering the area."
            }
          ]
        },
        {
          "id":142,
          "identity":{
            "name":"Steel Windows (Matter •)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Unveiling",
            "primary factor":" Duration",
            "suggested rote skills":" Science, Subterfuge, Larceny"
          },
          "description":[
            "Even the thickest wall of steel cannot hinder the sight of an alchemist. For the spell's Duration, its subject may see through a solid object within his range of vision as if it were transparent by focusing his sight upon it. If the object is multi-layered, like a matryoshka doll or a building with many walls and rooms, the subject can only see through the outermost layer on his end. Trying to see through layers of particularly intricate objects, as some machines are, may require a Wits + relevant Skill roll. As the spell does not increase its subject's visual field, sufficiently large obstacles such as a mountain may only appear transparent up to a certain point."
          ],
          "others":[
            {
              "+1 Reach":" The subject may see through multiple layers, each layer beyond the first requiring a turn of concentration. This still does not allow her to see entirely past huge obstacles beyond his normal sight."
            },
            {
              "+1 Reach and add Life •":" The spell can be used to see through living creatures, revealing their insides. He may adjust how much he can see through, choosing to examine someone's muscles or analyze her organs. Understanding what he is seeing may require an Intelligence + Medicine roll, while searching for specific organs or tissues may require a Wits + Medicine roll."
            }
          ]
        }
      ],
      "apprentice":[
        {
          "id":143,
          "identity":{
            "name":"Bath Time (Matter ••)",
            "author":"by LadyLens"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "suggested rote skills":" Medicine, Occult, Survival"
          },
          "description":[
            "Exactly what it says on the tin. This spell forces all dirt, grime, etc. on the subject's body to fall away. The spell makes no attempt to distinguish, for example, makeup from dried mud: if it's not alive, it goes away. Note that hair and skin are part of a living being's Pattern, and thus unaffected. It is recommended the subject be unclad unless a need to visit a laundry should also be desirable. The target is now as clean as if she had just taken a very thorough shower and brushed her teeth completely. Larger-than-human targets require increased Size. The resulting clean state lasts as long as it normally would."
          ],
          "others":[
            {
              "+1 Reach":" The spell can be used to selectively remove or not remove particular things."
            }
          ]
        },
        {
          "id":144,
          "identity":{
            "name":"Clothes Make the Man (Matter ••)",
            "author":"by HerbertIsBestBert"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "withstand":" Composure",
            "suggested rote skills":" Crafts, Stealth, Subterfuge"
          },
          "description":[
            "All tools carry within them the symbols of their purpose, and all clothing carries with it the symbolic purpose of expressing a certain persona. By drawing upon that symbology and bringing it to the forefront, the Mage can let their clothing speak for them. So long as the spell’s Potency exceeds the Composure of any witness, any wearer of the subject article/suit of clothing cannot be identified by any others in a persona that does not naturally accommodate the subject article/suit.",
            "In such a way, while a person in a police officer’s uniform may act completely out of character for a police officer, any witnesses who do not Withstand the spell will merely see the subject as being horribly unprofessional, rather than being duplicitous about his identity. This is not flawless however, as symbolism can be interpreted in different ways. Where one law-abiding citizen might see a police officer as a symbol of benevolent authority, another might see them as a corrupt pillar of a tyrannical organization. In addition, at its base, this does not provide any benefit to social interaction beyond that which would be provided by acknowledgement of the individual’s identity."
          ],
          "others":[
            {
              "+1 Reach":" This spell can accommodate for ‘imperfections’ in the appearance of a suit of clothing. The dirty, unwashed nature of a subject’s suit may be disregarded, or the ‘fake’ police uniform of a kissogram or entertainer might be looked past by any witness who cannot Withstand the spell's Potency."
            },
            {
              "+1 Reach":" When undertaking a social action against individuals who have not seen past the symbology of the subject’s clothing, the subject gains a bonus to all social tests in keeping with that symbolism equal to the spell’s Potency (based on how much it exceeds their Composure)."
            },
            {
              "+2 Reach":" When casting the spell, the caster may specify a single aspect of the subject’s symbolism to enhance above all others. In this way, rather than being seen as an authority figure, or as a suspicious entity, the wearer of the classic 90s black suit and shades combo might be ignored as merely another faceless drone."
            }
          ]
        },
        {
          "id":145,
          "identity":{
            "name":"Cool Water (Matter ••)",
            "author":"by Lady Lens"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "suggested rote skills":" Academics, Science, Survival"
          },
          "description":[
            "Water is everywhere, often in places one would not expect. This spell draws water from the very air, condensing vapor into a usable liquid. Each point of Potency yields enough water for one person for one day, assuming it's kept in a suitable container. This effect is Lasting."
          ],
          "others":[
            {
              "+1 Reach":" The mage can draw water from the extremely dry air of cold deserts, such as glaciers and the polar regions. Contrary to popular belief, hot desert air typically holds a very great deal of water."
            }
          ]
        },
        {
          "id":146,
          "identity":{
            "name":"Copying (Matter ••)",
            "author":"by wyrdhamster"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "cost":" 1 Mana",
            "withstand":" Durability of original item",
            "suggested rote skills":" Crafts, Expression, Occult"
          },
          "description":[
            "By means of this spell, the mage can copy the item he is seeing with materials that are suitable to its composition. Many Mysterium apprentices make copies of precious books from just stashes of ink and paper by this spell.",
            "When the spell’s Duration expires, the original items return to their original form."
          ],
          "others":[
            {
              "+1 Reach":" For one point of Mana, the spell’s Duration is Lasting."
            },
            {
              "+1 Reach":" For copying complex mechanisms."
            },
            {
              "Add Prime •":" Mage can copy also any Rote found in the original Grimoire, like with ‘Scribe Grimoire’ Prime • spell."
            }
          ]
        },
        {
          "id":147,
          "identity":{
            "name":"Grease or Glue (Matter ••)"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Scale",
            "suggested rote skills":" Crafts, Brawl, Survival"
          },
          "description":[
            "The easy way to turn the tide of physical combat and make those damn wheels spin, those spells changes the properties of matter it cast upon, causing the following Environmental Tilts:",
            "Grease creates Ice Tilt in the area it's cast upon.",
            "Glue creates Glue Tilt in the Area it’s cast upon: -4 to Speed, Dramatic Failure causes Immobilized Condition."
          ]
        },
        {
          "id":148,
          "identity":{
            "name":"Defy Artifice (Matter ••)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Shielding",
            "primary factor":" Potency",
            "suggested rote skills":" Brawl, Survival, Athletics"
          },
          "description":[
            "All worked Matter can change back to dust, and humanity's beloved tools are no exception. Bullets are crunched into scrap metal, swords fail to penetrate skin, and even random non-weapon objects lose their strength. The subject is immune to any bashing damage from man-made objects, while downgrading lethal damage equal to Potency to bashing. Aggravated damage is unaffected.",
            "Objects that have not been worked by human hands, such as a normal rock or a hunting knife forged by a werewolf, bypass the protection. Barehanded assault is also an option, as are natural materials and substances wielded by a human."
          ],
          "others":[
            {
              "+1 Reach":" The spell extends to natural objects that are used by a human as a weapon."
            },
            {
              "+2 Reach":" The subject is immune to both bashing and lethal damage from artificial objects, and downgrades aggravated damage equal to Potency to lethal."
            }
          ]
        }
      ],
      "disciple":[
        {
          "id":149,
          "identity":{
            "name":"Alter Flammability (Matter •••)",
            "author":"by Menace"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "suggested rote skills":" Survival, Larceny, Firearms"
          },
          "description":[
            "The subject can be made flammable or non-flammable. A subject made flammable will be as easy to light on fire as dry wood."
          ],
          "others":[
            {
              "+1 Reach":" The subject can be made extremely flammable or even explosive."
            }
          ]
        },
        {
          "id":150,
          "identity":{
            "name":"Brew Potion (Matter •••)",
            "author":"by Magic Swordsman"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "suggested rote skills":" Crafts, Occult, Survival"
          },
          "description":[
            "Magical potions and unguents are widely recognized as part of the wizard’s trade. This spell prepares a material compound to hold a supernal charge. A mage may then cast another spell into the potion, specifically shaping their Imago and spending a point of Mana. The potion may contain up to its Potency in spells, but using the compound triggers all of them. While within the potion, a spell counts against the caster’s spell control, but its Duration is held.",
            "Potions come with certain limitations. Whomever imbibes the potion becomes the subject of its spells, although a cream or oil might be spread or splattered. If Brew Potion’s Duration runs out while it still contains spells, the held spells are lost and the potion visibly spoils.",
            "Usually this spell is cast on a liquid that resonates with the spell effect, but it could also be cast on a piece of fruit to be eaten, a powder to be inhaled, a breakable object to be tossed like a grenade, etc. 'Ingredients' act as Sacrament Yantras."
          ],
          "others":[
            {
              "+1 Reach":" The mage may add a Key to the activation of the potion. Perhaps it will only work once a certain reagent is mixed in, or it only has an effect on a certain person."
            },
            {
              "+1 Reach":" The potion’s ingredients lose any effect they may have had on an imbiber; so an Acceleration potion of quicksilver won’t inflict mercury poisoning."
            },
            {
              "+1 Reach":" The potion may contain multiple doses. If the same spell is cast into it multiple times, each adds an additional use to the potion."
            }
          ]
        },
        {
          "id":151,
          "identity":{
            "name":"Close Enough (Matter •••)",
            "author":"by Justin Sane"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Crafts, Occult, Science"
          },
          "description":[
            "This spell transforms one substance into another, as long as both are conceptually related. A glass of water can be turned into wine, lead can be turned into gold, and so on."
          ]
        },
        {
          "id":152,
          "identity":{
            "name":"Devouring the Fallen (Matter •••)",
            "author":"by Aeryes"
          },
          "properties":{
            "practice":" Fraying",
            "primary factor":" Potency",
            "withstand":" Durability",
            "suggested rote skills":" Craft, Expression, Science"
          },
          "description":[
            "The mage may pull energy from his target's decay into himself. The target must have at least one less point of Structure than it would when perfectly preserved or properly repaired. For each level of Potency, he may Scour the target's Pattern for one point of Mana, decreasing Structure by one in the process, causing damage through decay. Using this spell counts towards the limit of times per day a mage can gain Mana through Scouring."
          ],
          "others":[
            {
              "+1 Reach":" The mage may affect a target that is fully preserved and/or in perfect shape instead of one that is damaged."
            },
            {
              "+1 Reach":" The spell does not count toward the limit of times per day a mage can gain Mana through Scouring."
            }
          ]
        },
        {
          "id":153,
          "identity":{
            "name":"Form Follows Function (Matter •••)",
            "author":"by Frishman"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Crafts, Expression, Persuasion"
          },
          "description":[
            "The Mage transcribes a Supernal blueprint onto a collection of discrete but homogenous pieces, forcing them to take that shape and its associated function for a time. The willworker could use this spell to draw a sword from the sand, a bottle from broken glass, a shield from smoke or any other simple item with no moving parts from disparate pieces of the same material. The only limitation is that he needs to have enough of the material to create the item within the Scale of the spell, and thus the Scale may need to be enhanced in order to create items out of air or smoke. If the item created is a weapon, it gains a weapon bonus of 2; if armor, an armor rating of 2; and if another type of item an equipment bonus of +2."
          ],
          "others":[
            {
              "+1 Reach":" the Mage can use this spell to create complex items, ones with a number of moving parts equal to the spell's Potency. A revolver, for example, could be created using a spell of Potency 3 (though you would have to provide your own ammunition)."
            }
          ]
        },
        {
          "id":154,
          "identity":{
            "name":"Freezing-point Depression (Matter •••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Science, Survival, Persuasion"
          },
          "description":[
            "Lower a material's freezing point. This can be used to melt ice and snow, removing the Ice Tilt and reducing the Blizzard Tilt to an Extreme Cold and/or Heavy Winds Tilts."
          ]
        },
        {
          "id":155,
          "identity":{
            "name":"Knight of the Willow Branch (Matter •••)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Weaponry, Brawl, Survival"
          },
          "description":[
            "The alchemist unlocks the hidden potential of violence hidden within everyday objects. When the spell's subject is used as an improvised weapon by the caster, she does not suffer the -1 penalty when attacking, and the weapon does not take damage upon successful attacks. Also, she subtracts Potency from the object's Size for the purpose of determining its Initiative penalty and Strength requirement."
          ],
          "others":[
            {
              "+1 Reach":" Potency is added to the improvised weapon's damage rating."
            },
            {
              "Add Prime •••":" Attacks made with the weapon are considered supernatural, for creatures vulnerable to such distinctions."
            }
          ]
        },
        {
          "id":156,
          "identity":{
            "name":"Leaden Feathers (Matter •••)",
            "author":"by Menace"
          },
          "properties":{
            "practice":" Perfecting/Fraying",
            "primary factor":" Potency",
            "suggested rote skills":" ?"
          },
          "description":[
            "The Mage alters the weight of an object, each point of potency either doubling or halving the subject's weight."
          ],
          "others":[
            {
              "+1 Reach":" The object becomes lighter than air causing it to float up."
            }
          ]
        },
        {
          "id":157,
          "identity":{
            "name":"Printing (Matter •••)",
            "author":"by wyrdhamster"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "cost":" 1 Mana",
            "withstand":" Durability of original item"
          },
          "description":[
            "Like in ‘Copying’ spell, only any solid material will be good for copy.",
            "Reach and Prime options are the same."
          ]
        },
        {
          "id":158,
          "identity":{
            "name":"Transparency (Matter •••)",
            "author":"by Dark Archon"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Crafts, Stealth, Subterfuge"
          },
          "description":[
            "One of the best ways to hide something is to make it invisible. One possible way to do this is to manipulate Forces, forcing light to go through objects; the other possible way is to make everybody unsee it with Mind. This spell uses Matter for that effect - it simply makes the matter of the object completely transparent. This does not change mass, density or other properties of an object, though if it has functions which depend on the ability to block light (solar panels, for example), then it can't function anymore. You can wear armor and weapons in this way, and nobody will notice unless you go through a scanner or be searched physically."
          ]
        }
      ],
      "adept":[
        {
          "id":159,
          "identity":{
            "name":"Colossus (Matter ••••, Life ••••)",
            "author":"by AmusedByIrony"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Athletics, Crafts, Medicine"
          },
          "description":[
            "The mage transmutes entire portions of his anatomy into living wood, stone, or metal. The mage's skin, muscle, and bone become a material with Durability equal to Potency, to a maximum of 5 (equivalent to multiple reinforced layers of steel). This Durability is added to the mage's Health and Armor; per the normal rules for Objects, this additional Armor does not apply against aggravated damage. The mage's unarmed attacks are now lethal weapons with damage rating [Durability]. Unless an attack deals aggravated damage, the mage is immune to the Arm Wrack and Leg Wrack tilts."
          ],
          "others":[
            {
              "+1 Reach":" The transmutation turns inward, magic replacing cardiovascular, digestive, nervous, and respiratory functions. For the Duration of the spell, the mage no longer needs to breathe or eat, does not suffer wound penalties, and is immune to the Bleeding, Drugged, Poisoned, Sick, and Stunned Tilts."
            },
            {
              "+1 Reach":" The mage's metal flesh can mimic the alchemical properties of a rare or precious material, such as silver."
            }
          ]
        },
        {
          "id":160,
          "identity":{
            "name":"Dress Code (Matter ••••, Spirit •)",
            "author":"by galivet"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Crafts, Survival, Socialize"
          },
          "description":[
            "This spell gauges the Resonance of the subject's current location and/or social context and modifies the subject's garb to be appropriate for that setting -- even if the mage (or subject) doesn't have a clue what the appropriate garb would be. Add Potency to the mage's social rolls while in the setting. For determining First Impression as part of a social maneuver, consider the subject to have met the criteria for a Good impression."
          ]
        },
        {
          "id":161,
          "identity":{
            "name":"Duplicate (Matter ••••)",
            "author":"by wyrdhamster"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Potency",
            "cost":" 1 Mana",
            "withstand":" Durability of original item",
            "suggested rote skills":" Crafts, Expression, Occult"
          },
          "description":[
            "Like in ‘Copying’ spell, only the mage can conjure copy out of thin air. In reality, he is making it out of air. To any witness, the item just comes in two exactly the same things, like a cell is dividing itself. Reach and Prime option are the same like in ‘Copying’ spell."
          ]
        },
        {
          "id":162,
          "identity":{
            "name":"Petrification (Matter ••••, Life ••••)"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" Stamina",
            "suggested rote skills":" Intimidation, Subterfuge, Occult"
          },
          "description":[
            "Calling on the legendary power of the Gorgons, the Mage turns flesh to stone with their terrible gaze. The target turns into a statue of themselves, with Structure and Durability as appropriate for a solid stone object of their size and composition (marble is very different from granite, for example).",
            "Targets turned to stone are not dead, but they aren't 'alive' either; the target is rendered unconscious and unaware for the Duration of the spell, during which they do not age or hunger. If the statue is damaged in any way, the target receives comparative wounds when turned back to flesh, but is otherwise unaware of any harm done to them. If the damage is repaired before this time, no harm occurs. If sufficient damage is dealt to reduce the statue to Structure 0, the target dies, and reconstructing the statue does nothing to restore them.",
            "Petrified targets, despite their quiescent state, can be communicated with. Mind spells that allow the reading of minds or telepathic contact can interact with the victim as they would any mortal. The target experiences this as a panicked, dream-like state, though sufficient communications in this manner may allow them to become aware of their situation. If they have any magical abilities, such powers are available to them in these moments."
          ]
        },
        {
          "id":163,
          "identity":{
            "name":"Pykrete (Matter ••••, Death •••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Crafts, Science, Survival"
          },
          "description":[
            "During World War II, Geoffrey Pyke proposed pykrete as a candidate material for a supersized aircraft carrier for the British Royal Navy. Pykrete features unusual properties, like only being usable in cold temperatures, having a relatively slow melting rate due to its low thermal conductivity, as well as being equal in strength and toughness to concrete.",
            "With this spell the mage patterns matter into pykrete. Death is used to create it with the cold temperatures required, but without a cold environment or further cooling, it will heat up and start to sag. Pykrete has a Durability of 3 and a Structure of 9."
          ],
          "others":[
            {
              "Add Matter 5":" Create the material out of nothing."
            },
            {
              "Add Death 5":" The material maintains its own cold temperature."
            }
          ]
        },
        {
          "id":164,
          "identity":{
            "name":"Terminator (Matter ••••, Time ••)",
            "author":"by arthexis"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "cost":" +1 Reach and 1 Mana (for Temporal Sympathy)",
            "suggested rote skills":" Science, Computer, Medicine"
          },
          "description":[
            "The mage builds a servant (see the Golem spell) using the materials at a location or subject substance or object in the past. Use the rules of Temporal Sympathy to determine how far back in Time the Golem can be created. The servant can perform changes to the past while the spell is active. When the spell's Duration elapses, the servant crumbles and any changes it has performed become Lasting. The servant can only perform simple tasks related to its chosen field."
          ],
          "others":[
            {
              "Add Mind •••••":" The mage can provide the servant with a full mind (see Psychic Genesis) to help it with its tasks and allow it to better improvise. This can be a copy of the mage's own mind."
            },
            {
              "Add Life ••":" The servant can be disguised as a living being."
            },
            {
              "+2 Reach":" The servant can be made of liquid metal."
            }
          ]
        }
      ],
      "master":[
        {
          "id":165,
          "identity":{
            "name":"Create Food (Matter •••••)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Making",
            "primary factor":" Potency",
            "cost":" 1 or more Mana (variable)",
            "suggested rote skills":" Survival, Persuasion, Medicine"
          },
          "description":[
            "While the alchemist is far from creating life from raw Matter, she can learn to sustain it. The mage targets a portion of food, and the spell creates a number of copies of it equal to Potency. She can scale the spell to as she needs it - the spell may duplicate separate apples in a bag, or the entire bag of apples, but the total volume of resultant food including the original must fit within the spell's Scale. All the created food is nutritionally identical to the original, and sustains living organisms normally."
          ],
          "others":[
            {
              "+1 Reach":" The mage may create food from nothing. He is limited to creating food that he remembers having eaten in the past."
            },
            {
              "+1 Reach and add Mind ••":" The mage may create non-existent food out of her imagination. Trying to create foods of particularly intricate recipes and presentation may require a Dexterity + Crafts roll, and modifying their nutritional qualities might call for a Intelligence + Medicine roll."
            },
            {
              "Add Prime •••••":" The mage may infuse the created foods with Mana, making them into tass."
            },
            {
              "Add Life ••":" The created food is supernaturally filling, and invigorates the living body. Everyone who consumes them is considered to have received a full night's rest, and enjoys a doubled natural healing rate for a period of time equal to the spell's Duration."
            }
          ]
        }
      ]
    }
  },
  {
    "mind":{
      "initiate":[
        {
          "id":166,
          "identity":{
            "name":"A Bug (Mind •)",
            "author":"by Moinen"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Duration",
            "withstand":" Resolve",
            "suggested rote skills":" Survival, Persuasion, Medicine"
          },
          "description":[
            "This spell nests itself on the subject's mind and leaks information in the real time. Pick a topic that this spell keeps eye on to get a descriptive output. It should be moderately precise - work life, commuting, sports competition, news. Whenever something that falls under this topic occurs the caster(or anyone that he chose at the time of casting) gets a description of the event.",
            "Example: If the topic is 'commute' the caster gets '...at the corner, right behind the butcher shop he turns left and goes straight down the street to the town hall…'. It won't reveal that he met his girlfriend on the way since it’s not the topic. It might however tell that he stopped and asked someone for advice on how to get there. When you choose 'imago', it will describe the spell that she craft when she crafts it '...she burns the tiger-monster-thing and Brian with the winds of Aether…' or reveals the conversation she has with her mentor '...she asks how harmful for the soul is to kill with magic and the master says that it depends on…'. Descriptions should be a little vague, unless the caster specifies a narrowed topic with a Reach option below. ",
            "ST should apply a penalty ranging from -1 to -3 when mage for example actively listens to 'soap operas' while trying to read a book on his own."
          ],
          "others":[
            {
              "+1 Reach":" Pick another topic. Can be taken multiple times."
            },
            {
              "+1 Reach":" The topic may be more precise - 'spying' can now become 'spying on a member of the Black Lotus organization' but it will only work on situations where the target thinks the Black Lotus is involved."
            },
            {
              "+1 Reach":" Even thoughts can betray the target giving away what he thinks at the moment about the topic. Now you know what the target will do before he does it, at the moment of its decision."
            },
            {
              "+2 Reach":" As above but when making an opposed check, pertaining the topic, against the subject of the spell you may add potency as bonus equipment. It can’t go above 5. Example"
            },
            {
              "+1 Reach":"The mage can tap in and out as an instant action. It’s a safety switch since the surveillance can be distracting at times."
            },
            {
              "+2 Reach":" Mage can tap in and out as a reflexive action."
            }
          ]
        },
        {
          "id":167,
          "identity":{
            "name":"Method Man (Mind •)",
            "author":"by Altasaire"
          },
          "properties":{
            "practice":" Compelling",
            "primary factor":" Duration",
            "suggested rote skills":" Investigation, Athletics, Socialize"
          },
          "description":[
            "It is said that a wise man wins first, and only then enters the battle, while the fool first enters the battle and only then tries to win it. It is also said that no plan survives contact with the enemy. This spell tries to rectify the latter by bolstering the subject's ability to think on the fly, expanding his mental capacity to allow him to handle small minutiae on the fly, without cutting in the precious attention that is often sorely needed to handle more pressing tasks of the moment.",
            "For the Duration of the spell, the subject could modify any Plan-type equipment he has as per gear modification rules, treating each significant part of the plan that needs to be changed as a separate 'feature' to be added."
          ],
          "others":[
            {
              "+1 Reach":" The spell also speeds up the decision-making process considerably, allowing to make changes in the plans at the same time as performing another, separate instant or extended task."
            },
            {
              "+2 Reach":" Perception of the subject is sharpened to a needle point, as the world around slows to a seeming crawl. He can create a whole new plan on the spot rather than modifying an existing one while the spell is in effect at the same time as performing another instant or extended task."
            }
          ]
        },
        {
          "id":168,
          "identity":{
            "name":"Read Potential (Mind •)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Potency",
            "suggested rote skills":" Academics, Occult, Empathy"
          },
          "description":[
            "By scrutinizing her subject, the caster can determine the subject’s current amount of unspent Experiences, expressed as their current potential, or the amount of personal growth they’ve recently seen."
          ],
          "others":[
            {
              "+1 Reach":" The mage may also determine amounts of other forms of Experiences the subject possesses, such as the Arcane Experiences of fellow Mages or the Vitriol Experiences of Prometheans."
            }
          ]
        },
        {
          "id":169,
          "identity":{
            "name":"Sense Thoughts (Mind •)",
            "author":"by Dark Archon"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Duration",
            "suggested rote skills":" ?"
          },
          "description":[
            "The spell listens to thoughts and emotions of being inside of an area, telling the mage of their location. This spell can be very taxing on the psyche of mage who cast it if location is happens to be in area with high human traffic."
          ],
          "others":[
            {
              "+1 Reach":" The mage knows the amount of dots in Mental or Social attributes of person who is entering the area."
            },
            {
              "+1 Reach":" The mage knows a specific amount of dots in one Mental or Social attribute of the person who is entering the area."
            }
          ]
        },
        {
          "id":170,
          "identity":{
            "name":"Reveal Enigmas (Mind •)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Duration",
            "suggested rote skills":" Investigation, Science, Academics"
          },
          "description":[
            "The psychonaut heightens her mental acuity in face of puzzles and mysteries, dissecting their patterns to discover the solution. Simple puzzles require no more than a glance to solve. In case of more complex mysteries represented by an Investigation effort (as per Chronicles of Darkness), this spell adds its Potency to a Clue's number of elements. Scale may be increased to target multiple Clues, which requires the mage to divide Potency between them. Such additional elements last only for the spell's Duration."
          ],
          "others":[
            {
              "+1 Reach":" The spell grants inspective insight, allowing the mage to double-check established leads. The spell can be used to remove the Incomplete or Tainted tags from a Clue for a level of Potency, instead of providing extra elements."
            },
            {
              "Add Forces •":" The mage can now solve 'puzzles' in the form of computer codes and digital ciphers."
            }
          ]
        }
      ],
      "apprentice":[
        {
          "id":171,
          "identity":{
            "name":"Beast Master (Mind ••) ",
            "author":"by Tessie"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "suggested rote skills":" Animal Ken, Empathy, Survival"
          },
          "description":[
            "Gain a number of dots in an animal training fighting style (such as Falconry or K-9) equal to Potency for the Duration of this spell."
          ],
          "others":[
            {
              "+1 Reach":" Including an animal as a Subject of this spell circumvents the training period required to benefit from the Merit. If the Subjects do not share the Bonded Condition (or another fitting Condition such as Familiar) they both gain the Bonded Condition for the Duration of the spell."
            }
          ]
        },
        {
          "id":172,
          "identity":{
            "name":"Dead Mind (Mind ••)",
            "author":"by Dark Archon"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Potency",
            "suggested rote skills":" Medicine, Stealth, Subterfuge"
          },
          "description":[
            "Your thoughts freeze; your mind is still. You can act, but you don't think about it; you just act. This spell makes it much harder to read your thoughts, intentions or mental presence. Apply the spell’s Potency as a penalty to relevant Skill rolls (such as Empathy or Subterfuge) between the subjects. You may not reduce Skill rolls below their default - your penalty can only cancel bonuses from telepathy, ability to read emotions and so on."
          ],
          "others":[
            {
              "+1 Reach":" You may also apply the spell’s Potency as a bonus to Withstand any attempts to locate you with Mind magic."
            },
            {
              "+1 Reach":" You may also apply the spell’s Potency as a bonus to Withstand any attempts to inflict Mental Condition or Tilt on you."
            }
          ]
        },
        {
          "id":173,
          "identity":{
            "name":"Honed Will (Mind ••)",
            "author":"by Caladriu"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "suggested rote skills":" ?"
          },
          "description":[
            "The mage grants the subject the 9-again quality on mundane dice rolls where the subject spends Willpower, up to a number of rolls equal to Potency during the spell's Duration."
          ],
          "others":[
            {
              "+1 Reach":" The benefit becomes 8-again."
            },
            {
              "+2 Reach":" The benefit extends to spellcasting rolls."
            }
          ]
        },
        {
          "id":174,
          "identity":{
            "name":"The Inescapable Question (Mind ••)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "withstand":" Resolve",
            "suggested rote skills":" Persuasion, Investigation, Computer"
          },
          "description":[
            "Change begins by challenging assumptions, which in turn begins with a simple question. As the spell is cast, the mage asks her subject a question fitting the situation. Provided the subject can hear and understand her, the question takes root in his mind for the spell's Duration. Depending on context this replicates one of the Guilty, Shaken, or Spooked Conditions, but without implying the same degree of mental trauma. The Question itself can be delivered through telepathic methods, such as the 'Psychic Domination' or 'Telepathy' spells and similar effects."
          ],
          "others":[
            {
              "+1 Reach":" The mage doesn't need to speak, not even telepathically. An action, a gesture, even a look instills aporia in his subject. This also allows him to deliver the Question with methods that normally transmit only emotions and images, such as the 'Emotional Urging' spell and similar effects."
            },
            {
              "+1 Reach":" The spell instills the Obsession Condition instead."
            },
            {
              "+1 Reach":" When the subject resolves the Condition imposed by the spell, depending on the method she immediately gains either the Inspired or Steadfast Condition."
            }
          ]
        },
        {
          "id":175,
          "identity":{
            "name":"Just a Flesh Wound (Mind ••)",
            "author":"by Shroudb"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Potency",
            "withstand":" Composure",
            "suggested rote skills":" Expression, Stealth, Subterfuge"
          },
          "description":[
            "The target of this ability believes that his attacks have the opposite outcomes. Attacks that strike the target seem like they missed, attacks that missed seem like they hit. Enveloping all the senses, someone swinging, and hitting with a sword p.e., wouldn't feel the impact of the blow nor hear the cry of his target, but instead would 'see' the defender dodging out of the way. Similarly, someone throwing a fireball, and missing, would instead see, and smell, his opponent being charred to 'really wounded, but not quite dead' state. The actual attack is resolved normally despite the perception of it (so you swing a sword and hit, you think you missed, the opponent seems healthy, but in reality he does take, and note the damage and/or associated penalties).",
            "This spell doesn't fool the one actually getting attacked (the target of the attack still knows, and feels, the full burn of the attack). This spell is not limited to 'attack roll' actions, but instead is applied to everything the 'attacker' thinks is an attack (so even social slander and etc, or sensory spells)."
          ],
          "others":[
            {
              "+1 Reach":" The caster can now reflexively decide if an attack looks like a miss or a hit."
            },
            {
              "+1 Reach":" This spell fools even the one getting attacked (The ST should keep his Health total a secret)."
            }
          ]
        },
        {
          "id":176,
          "identity":{
            "name":"Stoke the Flames (Mind ••)",
            "author":"by Deionscribe"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Duration",
            "suggested rote skills":" ?"
          },
          "description":[
            "The Mage can urge a given subject towards accomplishing a particular goal of his choosing, This grants him the Inspired Condition for the Duration of the spell, or until he chooses to resolve it earlier."
          ],
          "others":[
            {
              "+2 Reach and 1 Mana":" By spending a point of Mana, the Mage allows a subject to avail of the Condition a number of times equal to the spell's Potency before it's resolved."
            }
          ]
        },
        {
          "id":177,
          "identity":{
            "name":"Rashomon Effect (Mind ••)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "withstand":" Composure",
            "suggested rote skills":" Subterfuge, Investigation, Persuasion"
          },
          "description":[
            "The human mind and memories are not infallible as many believe, and are subject to distorting events in their own perspectives and self-interests. Those who witness the subject within the spell's Duration will remember a highly subjective version of it, giving different accounts to anyone who should come asking. Using supernatural means of observation or memory-reading provokes a Clash of Wills. Mage Sight always reveals the truth without a Clash.",
            "While this spell does not befuddle supernatural events caused by or transpired around the subject, most people already have flimsy memories regarding such matters."
          ],
          "others":[
            {
              "+1 Reach":" The spell extends to supernatural witnesses. One may remember the man across the street spontaneously bursting into flame, while another may remember the same man attacked with a molotov cocktail."
            },
            {
              "+1 Reach":" The spell provokes a Clash of Wills against Mage Sight, and on success befuddles even the Awakened senses. Supernatural phenomena appear to belong to unrelated Arcana, and Nimbuses are likewise confused for someone else's or an entirely made-up one."
            }
          ]
        },
        {
          "id":178,
          "identity":{
            "name":"Subtle Occlusion (Mind ••)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Duration",
            "cost":" 1 Mana",
            "suggested rote skills":" Occult, Subterfuge, Stealth"
          },
          "description":[
            "The psychonaut may veil a subject under a psychic shroud, away from prodding eyes and meddlesome influences. The subject of the spell is granted dots in the Occultation Merit equal to Potency, even if he is not Awakened. If the subject is a mage who already has the Merit, her rating in it is increased by Potency. In both cases, the Occultation Merit's rating may be raised up to five dots, exceeding its normal limit. If the subject has the Fame Merit, its effects are suppressed until the spell expires. "
          ],
          "others":[
            {
              "+1 Reach and 1 Mana":" By spending one point of Mana, the Occultation Merit may be raised above five dots, as much as Potency allows it."
            },
            {
              "+2 Reach and 1 Mana":" By spending one point of Mana, the mage may make his non-Awakened subjects eligible for purchasing the Occultation Merit."
            }
          ]
        },
        {
          "id":179,
          "identity":{
            "name":"Tend the Flames (Mind ••)",
            "author":"by Tessie"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "withstand":" Composure",
            "suggested rote skills":" Empathy, Intimidation, Socialize"
          },
          "description":[
            "The mage urges the subject towards accomplishing certain goals or douses their enthusiasm. This spell bestows a number of Conditions (such as Deprived, Inspired, Obsession, Shaken or Steadfast) or Tilts (such as Beaten Down, or Insane) on the subject equal to Potency for the Duration of the Spell. The subject may Withstand negative effects with Composure.",
            "Note that beneficial Conditions don't grant Beats when the subject resolves them unless the caster achieved an exceptional success in the casting."
          ],
          "others":[
            {
              "+2 Reach":" The Conditions and Tilts can affect spellcasting roll."
            }
          ]
        },
        {
          "id":180,
          "identity":{
            "name":"That Which Doesn’t Kill You (Mind ••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "withstand":" Resolve",
            "suggested rote skills":" ?"
          },
          "description":[
            "The Mage imposes the Tension condition on the target. This condition may be resolved at any time by automatically failing any action in lieu of rolling, and causes the subject to become frustrated by her own success. For every successful action the subject takes while this Condition is in effect, tension builds, and the subject takes a cumulative -1 penalty to all future actions, until the Condition is resolved. This penalty cannot exceed five dice."
          ],
          "others":[
            {
              "+1 Reach":" The Tension condition becomes Persistent, granting Beats every time an action is voluntarily failed. This doesn’t resolve the Condition until a number of actions have been voluntarily failed equal to Potency."
            },
            {
              "+1 Reach and 1 Mana":" For a point of Mana, the penalty imposed on actions may reach above five dice - but still starts at zero. \t"
            },
            {
              "Tension":" Your character is incredibly tense, and magic forces her own successes to cause that tension to grow instead of providing relief. For every successful action the subject takes while this Condition is in effect, tension builds, and the subject takes a cumulative -1 penalty to all future actions, until the Condition is resolved. This penalty cannot exceed five dice."
            },
            {
              "Resolution":" Opt to fail any roll with meaningful consequences."
            }
          ]
        },
        {
          "id":181,
          "identity":{
            "name":"Under the Bushel (Mind ••)",
            "author":"by Moinen"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Duration",
            "cost":" 1 Mana",
            "suggested rote skills":" ?"
          },
          "description":[
            "This spell hides the will of the subject from others making it impossible to be aware of Clash of Wills against them. Others also can't spend Willpower on the test. ST makes a hidden roll of Power Stat + Power for an unaware participant."
          ],
          "others":[
            {
              "+1 Reach":" By blurring the edges of the subject’s will, the spell assures victory in uncertain circumstances. In the case of a draw, the subject wins or rather the opponent loses by giving up too early."
            }
          ]
        }
      ],
      "disciple":[
        {
          "id":182,
          "identity":{
            "name":"Akashic Repository (Mind •••)",
            "author":"by Menace"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Socialize, Academics, Science"
          },
          "description":[
            "Though the Akashic Records are inaccessible as far as any willworker knows, a Mage can turn himself into a smaller repository of knowledge. This spell allows all of its subjects to share a number of the mage's of a number of skills. Choose a number of Skills equal to the spell’s Potency. Whenever one subject needs to make a roll involving one of the chosen Skills, they can use the mage's dot rating. This doesn't affect rolls to activate supernatural powers such as rotes or supernatural abilities."
          ],
          "others":[
            {
              "+1 Reach":" The subjects share the use of skill with each other not only with the mage."
            },
            {
              "+2 Reach":" The subjects share all skills, not just the chosen ones."
            },
            {
              "+1 Reach":" The mage can also choose a single mental Merit to share"
            }
          ]
        },
        {
          "id":183,
          "identity":{
            "name":"Astral Invitation (Mind •••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "withstand":" Resolve",
            "suggested rote skills":" Empathy, Occult, Socialize"
          },
          "description":[
            "A subject of this spell may choose to enter the Oneiros of another subject when meditating into the Astral. The ‘host’ subject must be determined at the time the spell is cast, by the caster."
          ],
          "others":[
            {
              "+1 Reach":" Instead of a single host, all subjects may enter the Oneiros of any other subject."
            },
            {
              "+1 Reach":" This effect extends to any time a subject would enter their Oneiros (including backtracking from the Temenos), and not just the initial Meditation into the Astral."
            },
            {
              "+1 Reach":" When entering the same Oneiros, all the entry points of all subjects are within the same general area, requiring no more than a few seconds of travel to traverse the distance between them."
            }
          ]
        },
        {
          "id":184,
          "identity":{
            "name":"Blur the Past (Mind •••)",
            "author":"by Neros"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "withstand":" Resolve",
            "suggested rote skills":" Academia, Stealth, Subterfuge"
          },
          "description":[
            "The mage can change a memory without the need to read the subject’s mind, as long as it is a memory he knows the subject has. Either the mage experienced it himself, saw a video or a photo with an accurate description. The changed memory must still be within the same context of the original memory. The number of changes that can be made is equal to Potency.",
            "Once the Duration expires, the subject instantly reverts to its original memory. Memories of the time spent 'blurred' will seem distant and hazy, dreamlike, but the subject will remember the altered perspective at least to some degree. But if the memory that is changed is very trivial to the subject and the Duration is long enough, the subject may have naturally forgotten the change as time passes, even when the spell ends."
          ],
          "others":[
            {
              "+1 Reach":" A Willworker can completely rework what the subject can remember. One memory per Potency can be changed to anything the mage wishes."
            },
            {
              "+2 Reach":" The effect is lasting."
            }
          ]
        },
        {
          "id":185,
          "identity":{
            "name":"Burning Bright (Mind •••)",
            "author":"by Deionscribe"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Potency",
            "suggested rote skills":" ?"
          },
          "description":[
            "The Mage can bless a subject so that a given action he exerts great effort on has a higher chance of success. When he spends Willpower to bolster an action, he may add the spell's Potency as the bonus, instead of the usual +3."
          ],
          "others":[
            {
              "+1 Reach":" The subject may apply the benefits of the spell an additional number of times equal to Reach spent."
            }
          ]
        },
        {
          "id":186,
          "identity":{
            "name":"Enlightened Will (Mind •••)",
            "author":"by Caladriu "
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "suggested rote skills":" ?"
          },
          "description":[
            "The mage grants the subject an additional Vice, as the Vice-Ridden Merit: 'Succeeding on invested actions.' This means the first significant success towards an Aspiration or Obsession in a scene restores a point of willpower. Of course, these are not the only investments a mind makes; any roll on which the character spends Willpower counts, as well. "
          ],
          "others":[
            {
              "+1 Reach and 1 Mana":" For a point of Mana, mundane actions where the subject spends Willpower have the rote quality."
            },
            {
              "+2 Reach and 1 Mana":" For a point of Mana, the subject automatically succeeds on uncontested mundane actions where they spend Willpower. On contested mundane actions, they add effective successes equal to Potency if they rolled at least one success."
            }
          ]
        },
        {
          "id":187,
          "identity":{
            "name":"Expert System (Mind •••, Forces ••)",
            "author":"by galivet "
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "suggested rote skills":" Computer, Expression"
          },
          "description":[
            "This spell modifies a computing device by adding a program to it that provides the functionality of an expert system for any skill chosen by the caster. For the Duration of the spell, if the device's user is able to use the device as a tool when rolling the relevant skill, the device provides a bonus to the roll equal to Potency. The device's user must have at least one dot in the skill to benefit from the expert system. At the end of the spell's Duration, the expert system 'uninstalls' itself from the device."
          ],
          "others":[
            {
              "+1 Reach":" The mage may provide an additional expert system that benefits another skill for each additional reach, subdividing Potency among them."
            }
          ]
        },
        {
          "id":188,
          "identity":{
            "name":"False Fame (Mind •••)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "primary factor":" Duration",
            "withstand":" Composure",
            "suggested rote skills":" Persuasion, Socialize, Streetwise"
          },
          "description":[
            "The psychonaut weaves the subject's psychic presence into a whirlpool, drawing in attention and recognition. The subject gains the Fame Merit at a rating equal to the spell's effective Potency, up to the Merit's normal 3-dot limit.",
            "What the subject is famous for is left vague. People will 'know' she is famous, but unable to pinpoint for what and make assumptions. If the subject fails a Social roll on which the Fame's dice bonus was applied, it becomes a dramatic failure where she draws unnecessary attention and suspicion.",
            "As this Merit is a mere psychic illusion, it does not grant the minimum Withstand rating. Also, beings using supernatural means of identifying the subject, as well as those with a general defense against psychic suggestions, may pierce the spell with a Clash of Wills."
          ],
          "others":[
            {
              "+1 Reach":" The vagueness of the hollow fame is removed, as each onlookers' minds convince themselves. The subject no longer risks automatic dramatic failure upon a failed Social roll."
            },
            {
              "+1 Reach and 1 Mana":" With a point of Mana, the illusory Fame may rise beyond 3 dots."
            },
            {
              "Add Space •••":" The web of sympathies around the subject change to fit her new station. The spell's Fame now grants the minimum Withstand rating against spells targeting the subject."
            }
          ]
        },
        {
          "id":189,
          "identity":{
            "name":"Forgetfulness (Mind •••)",
            "author":"by Poseur"
          },
          "properties":{
            "practice":" Fraying",
            "primary factor":" Potency",
            "withstand ":" Resolve",
            "suggested rote skills":" ?"
          },
          "description":[
            "This spell allows the mage to alter the subject’s thoughts that it possesses in the moment, hiding them from the subject’s consciousness: it makes every action harder to focus on because the subject needs to force its will to remember her own thoughts. This spell gives the subject a penalty equal to Potency on her next action."
          ]
        },
        {
          "id":190,
          "identity":{
            "name":"Golden Years, Tarnished Black (Mind •••)",
            "author":"by amechra"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "withstand":" Composure",
            "suggested rote skills":" Empathy, Intimidate, Occult"
          },
          "description":[
            "Memories are fickle and changeable - exploiting this, the subject has one of their happy memories stripped of all of its positive aspects. They suffer the False Memories (VtR: B&S) condition with regards to that memory."
          ],
          "others":[
            {
              "+1 Reach":" You are no longer restricted to only affecting happy memories. When this spell is used to worsen unhappy memories, the subject suffers the Fugue condition with regards to that memory instead."
            },
            {
              "+1 Reach":" You can use this spell to make a memory happier, rather than worsening it. When the False Memories condition caused by this spell is resolved, the subject takes a Condition as if this spell was used to worsen that memory instead."
            },
            {
              "+1 Reach":" The subject gains the Addicted condition in relation to an element of that memory instead of the False Memories condition. Nostalgia can be a bitch."
            }
          ]
        },
        {
          "id":191,
          "identity":{
            "name":"Goetic insertion (Mind •••)",
            "author":"by Menace"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "withstand":" Composure/Rank",
            "suggested rote skills":" Expression, Persuasion, Larceny"
          },
          "description":[
            "The casting mage can insert a free floating Goetia into the subject’s mind. Unless the mage targets himself with the spell, this requires taking additional spell factors.The goetic becomes an inherent part of the subject’s psyche. This might cause the subject to gain an additional Virtue, Vice or Aspiration. However as a person's psyche can only hold so much the Goetia in her fight for domination so after a time the new element of his psyche fades or replaces some other one of the same type."
          ],
          "others":[
            {
              "+1 Reach":" The Goetia can coexist indefinitely with other parts of the target’s personality."
            },
            {
              "+2 Reach":" The effect is Lasting (but see above"
            }
          ]
        },
        {
          "id":192,
          "identity":{
            "name":"I Know Kung Fu (Mind •••)",
            "author":"by Ehkesoyo"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Potency",
            "suggested rote skills":" ?"
          },
          "description":[
            "Movie nights at the Lorehouse can, sometimes, lead to some interesting developments. It is said the first Rote version included a 'come hither' gesture among its Mudras. This spell allows the mage to access a Fighting Merit with dots equal to potency for the Duration. The subject must fulfill the requirements as usual since the spell only provides the knowledge and muscle memory for the merit, but doesn't do anything to improve the capabilities of the mage."
          ],
          "others":[
            {
              "+1 Reach":" Mental or social attributes or skills can be enhanced in order to fulfill the requirements for a merit. Each point of potency spent this way nets one point. "
            },
            {
              "Add Life •••":" Allow the same with physical attributes."
            }
          ]
        },
        {
          "id":193,
          "identity":{
            "name":"Power Through Slavery (Mind •••)",
            "author":"by amechra"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "withstand":" Resolve",
            "suggested rote skills":" Intimidation, Occult, Persuasion"
          },
          "description":[
            "A distressingly popular spell amongst both the Adamantine Arrow and the Seers of the Throne (though for very different reasons). Upon casting this spell, choose another person to be your target's 'master' - your target receives Obedience to [Master's Name] as a second Vice, and takes a Beat whenever they fulfill that Vice."
          ],
          "others":[
            {
              "+1 Reach":" The target may take an Arcane Beat instead of a normal Beat whenever they would fulfill their secondary Vice. They may also treat 'following my master's orders' as an Oblation."
            },
            {
              "+1 Reach":" The master you choose may be an organization rather than a single person - the target's second Vice becomes Obedience to Members of [Organization Name]."
            },
            {
              "+1 Reach":" The master you choose gains the benefits of the Loved merit with regards to the Target."
            },
            {
              "Add Prime ••":" The target does not suffer Breaking Points due to their master's spells - they still suffer from all the other effects of the Sleeping Curse."
            },
            {
              "Add Death •••":" The target suffers from the Soulless condition for the Duration of the spell."
            }
          ]
        },
        {
          "id":194,
          "identity":{
            "name":"Psychic Violation (Mind •••)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Fraying",
            "primary factor":" Potency",
            "withstand":" Resolve",
            "suggested rote skills":" Intimidation, Academics, Empathy"
          },
          "description":[
            "A mind is concrete as any other Pattern to practitioners of the Mind Arcanum, and an Adept can pull at its loose threads to unravel its structure. This spell saps its subject of Willpower points equal to Potency. Subjects who have zero Willpower suffer half of remaining Potency, rounded down, as bashing damage."
          ],
          "others":[
            {
              "+1 Reach":" Instead of sapping Willpower points, the spell now decreases the subject's Willpower dots. Unlike the normal effect, this lasts only for the spell's Duration."
            },
            {
              "+1 Reach":" Instead of sapping Willpower, the spell inflicts the Soul Shocked Condition."
            },
            {
              "+1 Reach":" The victim suffers the Beaten Down Tilt, in addition to the other effects. This ignores being immune to the Tilt via being accustomed to violence."
            },
            {
              "Add Death •••":" The trauma forces the victim to roll for an Integrity or Wisdom breaking point, in addition to the other effects. Supernatural entities with other Integrity substitutes may be affected at Storyteller discretion."
            }
          ]
        },
        {
          "id":195,
          "identity":{
            "name":"The Snake Within (Mind •••)",
            "author":"by Five Eyes"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Potency",
            "suggested rote skills":" Politics, Empathy, Streetwise"
          },
          "description":[
            "The next time during this spell's Duration that its subject would recover Willpower from indulging their Vice, they recover a number of points equal to the spell's Potency, instead of the usual one. If this value exceeds their Resolve, they will develop a Condition related to the rush of the experience, such as Addicted, Guilty, or Obsession."
          ],
          "others":[
            {
              "+1 Reach and 1 mana":" The subject may recover Willpower from their Vice under the auspices of this spell even if they have already indulged their Vice in that scene."
            }
          ]
        },
        {
          "id":196,
          "identity":{
            "name":"Unfaltering (Mind •••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "suggested rote skills":" Academics, Athletics, Occult"
          },
          "description":[
            "The mage bolsters the subject's Resolve, allowing them to remain conscious even when their body is ready to collapse. Stamina rolls to remain conscious due to damage are considered to automatically succeed, and supernatural effects that knock the subject unconscious provoke a Clash of Wills."
          ],
          "others":[
            {
              "+1 Reach":" This spell can revive someone who is currently unconscious."
            },
            {
              "+1 Reach":" This spell allows the subject to ignore wound penalties equal to Potency."
            }
          ]
        },
        {
          "id":197,
          "identity":{
            "name":"Will Of Fire (Mind •••)",
            "author":"by Deionscribe"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Potency",
            "suggested rote skills":" Empathy, Expression, Persuasion"
          },
          "description":[
            "Fiery rhetoric can bolster human spirits. And with the right words, a Mage can give a group of friends and followers the will to succeed above and beyond their own capacity. The spell grants one Willpower point to the subject equal to its Potency. These Willpower points can only be used for actions related to the purpose of the spell, and cannot be regained once used."
          ],
          "others":[
            {
              "+ 2 Reach":" The Willpower gained from this spell may now be spent without any restriction."
            }
          ]
        }
      ],
      "adept":[
        {
          "id":198,
          "identity":{
            "name":"Beneath Your Skin (Mind ••••, Death ••••)",
            "author":"by Zombiecakes"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Stealth, Occult, Subterfuge."
          },
          "description":[
            "The Mage possesses a target, as per the Mind 4 spell 'Possession', with the added twist of transforming their dormant body into a shadow, as per the Death 4 spell 'Shadow Flesh', and pinning the shadow unto the possessed target's own. In this form you gain the Physical Attributes of the subject, and retain your Mental Attributes, as well as your ability to cast spells. As a standard action, you may touch another subject and 'jump' into them, also instantly pinning your own shadow-body without any conscious effort. However, this does cause the previously possessed to come out of it under a state of malaise, potentially drawing suspicion, if only for a moment."
          ],
          "others":[
            {
              "+1 Reach":" The Mage can alternate between controlling the possessed body, or moving the shadow-body independently of it as a reflexive action, though you can only control one by default."
            },
            {
              "+1 Reach":" The Mage can possess another subject via Sensory Range, not just Touch."
            },
            {
              "+1 Reach":" The Mage may, as a Standard action, take an item originally transformed on their person at the time of spellcasting, and bring it into normal form again for use."
            }
          ]
        },
        {
          "id":199,
          "identity":{
            "name":"Crab-Brain (Mind ••••, Life ••••)",
            "author":"by espritdecalmar"
          },
          "properties":{
            "practice":" Patterning",
            "primary spell factor":" Duration",
            "withstand":" Resolve",
            "cost":" None or 1 Mana",
            "suggested rote skills":" Animal Ken, Crafts, Empathy"
          },
          "description":[
            "I don't really know why you'd cast this spell, but here we are. The mage who decides to do this sort of thing transforms one of the subject's thought-patterns into a living organism. This can turn a Mental Condition into an animal; the subject no longer suffers from the Condition's effects. This can also transform a memory, dream, or passing thought. To affect a Persistent Condition or fundamental part of the subject's personality requires a point of Mana. This spell can be cast with an animal symbolic of the affected thought in mind, but this is not necessary; depression can be transformed into a giraffe, and reality won't really care.",
            "When the spell's Duration ends, the animal disappears and the Condition remanifests; if the animal is killed in the meantime, the Condition is permanently removed, but the subject gains no Beat for the excisement."
          ]
        },
        {
          "id":200,
          "identity":{
            "name":"Communion (Mind ••••)",
            "author":"by HerbertIsBertBert"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" Resolve",
            "suggested rote skills":" Academics, Occult, Persuasion"
          },
          "description":[
            "Verbal communication is such a crude thing, words a poor vehicle for meaning, a direct mind-to-mind link is superior in almost every aspect. That is precisely what this spell achieves, linking the minds of its subjects on an intimate level. Not merely are they capable of reading each other’s thoughts and memories, but instead they experience them as if they were their own. This can allow a rapid communication of nuanced concepts otherwise impossible to express through language. A single discussion held amongst such individuals might not be able to be transcribed in an entire library’s worth of books.",
            "In addition, this permits each individual insight into each other participant’s memories, feelings, perspectives, as well as their current sensory information. Effectively allowing each participant to exist as a combination of multiple people for the Duration of the spell. Due to the potential for disagreement and conflict in perspectives, as well as the potentially addictive rush of such sensations, extended or strenuous usage may inflict conditions upon subjects.",
            "When this spell ends, each subject is left with mere memories of what he experienced, unless he immediately spends Experiences to have learned a copy of what was shared with him. Some Mages use this spell to quickly and easily teach Rotes to one another."
          ],
          "others":[
            {
              "+1 Reach":" Subjects may share the use of each other’s skills."
            },
            {
              "+1 Reach":" Subjects may share the use of each other’s mental merits."
            },
            {
              "+1 Reach":" Only desired information is shared between subjects, the limits of which may be expressly changed at any time, and may be subconsciously decided upon, rather than explicitly stated."
            },
            {
              "+1 Reach":" The spell cannot impose negative Conditions upon its subjects."
            },
            {
              "Add Prime •":" Subjects may share the use of each other’s Rotes, and may utilize each other’s Mage Sight (but must spend Mana to activate it, if not a Ruling Arcana)."
            },
            {
              "Add Prime •••":" Subjects may perform cooperative, ritual spellcasting, utilizing a combination of the Arcana of the participants, so long as each has each requisite Arcana at least one dot. E.g. To cast a Prime 4, Matter 3, Mind 5 spell, all participants would need Prime 1, Matter 1, and Mind 1, but the levels of Prime 4, Matter 3, and Mind 5 could be contributed by separate Mages."
            },
            {
              "Add Prime ••••":" As above, except each participant need not have at least 1 dot in each requisite Arcanum."
            },
            {
              "Add Space ••":" Subjects may share use of Sympathetic Links."
            },
            {
              "Add Fate ••••":" Subjects may share use of the Destiny Merit."
            },
            {
              "Add Time •••":" Such is the speed at which communication is achieved that all attempts at social interaction between subjects are performed as instant actions."
            }
          ]
        },
        {
          "id":201,
          "identity":{
            "name":"Unlock Potential (Mind ••••)",
            "author":"by HerbertIsBertBert"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Academics, Occult, Persuasion"
          },
          "description":[
            "The mortal Mind is not quite so frail as many mages would believe, indeed those who investigate such things find it has incredible power hidden within, just waiting to be unlocked.",
            "With this spell, the mage can short-cut the Sleeper or Sleepwalker's mind to access these powers, stepping around whatever inherent blocks stop them from accessing them. For the Duration of the spell, the subject gains dots in a 'mental' Supernatural Merit equal to the spell's Potency. These can include such merits as Psychometry, Telekinesis, and Telepathy. Due to the Supernatural nature of these merits for the Duration of the spell the subject counts as a Sleepwalker, and does not trigger Paradox or Dissonance until the spell ends."
          ],
          "others":[
            {
              "+1 Reach":" The Mage may grant the subject an additional psychic Merit, dividing Potency between them, this Reach option may be taken additional times."
            },
            {
              "+2 Reach":" The Psychic Merits do not have their normal Drawbacks."
            },
            {
              "Add Arcanum 2":" The Mage may grant other supernatural merits which relate to phenomenon other than the mind alone, requiring the appropriate Arcanum at 2 dots. e.g. Forces 2 for Pyrokinesis, and Fate 2 for Thief of Fate."
            }
          ]
        }
      ],
      "master":[
        {
          "id":202,
          "identity":{
            "name":"Wake the Beast (Mind •••••)",
            "author":"by Flinty, in 'Flintys Homebrew Hub 2e'"
          },
          "properties":{
            "practice":" Making",
            "primary factor":" Duration",
            "withstand":" Resolve",
            "suggested rote skills":" Medicine, Survival, Persuasion"
          },
          "description":[
            "The mage levies a powerful curse upon an enemy, creating a 'Beast' in the back of his mind, similar to that of a Kindred. As the mage is creating the beast for the character he can endow it with a number of Frenzy triggers equal to the potency of the spell, defining the response of the beast (fight or flight) to the trigger as well. A mage frenzying does not gain any of the bonuses a vampire would."
          ],
          "others":[
            {
              "+1 Reach":" If the subject successfully resists frenzy, he gains the 'Tempted' condition as a vampire would."
            }
          ]
        }
      ]
    }
  }
]