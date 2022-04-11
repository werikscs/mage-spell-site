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
            },
            {
              "+1 Reach":" The Frenzy becomes cathartic to the subject, causing it to regain a point of Willpower after a Frenzy ends."
            }
          ]
        }
      ]
    }
  },
  {
    "prime":{
      "initiate":[
        {
          "id":203,
          "identity":{
            "name":"Ariadne (Prime •)",
            "author":"by Moinen"
          },
          "properties":{
            "practice":" Compelling",
            "primary factor":" Duration",
            "suggested rote skills":" ?"
          },
          "description":[
            "The traveling willworker uncoils behind a thread that allows to find a way back in even the harshest of conditions. The thread can only be seen with Active Mage Sight, but tests to find it are not penalized by Environmental Tilts."
          ],
          "others":[
            {
              "+1 Reach":" Irises can't be closed entirely if the thread was guided through them. They always leave a mark that can be later reopened with appropriate Arcanum and spell."
            },
            {
              "+1 Reach":" The thread is visible even without Active Mage Sight."
            }
          ]
        },
        {
          "id":204,
          "identity":{
            "name":"Ideolect (Prime •)",
            "author":"by amechra"
          },
          "properties":{
            "practice":" Unveiling",
            "primary factor":" Duration",
            "suggested rote skills":" Politics, Socialize, Streetwise"
          },
          "description":[
            "Culture is just a collection of symbols, combined this way. While under the effects of this spell, the subject becomes capable of intuitively 'sensing' the appropriate symbols of a specific local subculture - reducing any penalties to social rolls they suffer due to being an outsider by this spell's Potency."
          ]
        },
        {
          "id":205,
          "identity":{
            "name":"Peripheral Enhancement (Prime •)",
            "author":"by falco1029"
          },
          "properties":{
            "practice":" Unveiling",
            "primary factor":" Duration",
            "suggested rote skills":" Occult, Subterfuge, Investigation"
          },
          "description":[
            "Peripheral Mage Sight can help tell a Mage that something nearby might be a Mystery worth studying, but oftentimes utilizing Active Mage Sight or Unveiling Magic can be a bit distracting. When this spell is cast on a Mage, however, it provides a bit more information to the subject. Whenever their Peripheral Sight is activated, they may immediately use an instant action, representing a few seconds 'attuning' to the sensation, to get a flash of insight that reveals the anything to them that a turn of watching the offending supernal power or phenomenon with Active Mage Sight might provide, as if only the character's Ruling Arcana were used.",
            "For instance, if a ghost in Twilight utilized a Numina, a Moros benefiting from this spell would get a flash of insight telling them a Numina was used and approximately where (though without the Death 2 attainment, they wouldn't get a sense of the ghost responsible if not already visible). A Thyrsus might get a flash of insight if a Werewolf nearby spent Essence to speed their regeneration, showing them the individual and letting them know spiritual energy was used to reduce their injuries.",
            "Note that by default, this does not allow a Mage to use their 1 dot Counterspell attainment, as the information is still only learned when Peripheral Sight is triggered.",
            "When used on an unAwakened character, the target benefits from typical Peripheral Mage Sight for the Duration, but gains no further benefit."
          ],
          "others":[
            {
              "Add Any Arcanum • and 1 Mana":" By spending 1 Mana and utilizing another Arcana, information can be provided from that Arcanum in addition to the target's Ruling Arcana."
            },
            {
              "+1 Reach":" The information provided by the spell is reflexive and can provide an Awakened character with enough notice of a spell to use Counterspell even without Active Mage Sight active. They gain knowledge of the Arcana used and a sort of sixth sense of the character's Nimbus, rather than seeing it directly."
            }
          ]
        },
        {
          "id":206,
          "identity":{
            "name":"Sense Magic (Prime •)",
            "author":"by Dark Archon"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Duration",
            "suggested rote skill":" ?"
          },
          "description":[
            "Most mages prefer for their sanctums to be devoid of alien magic. This spell tells mage if somebody tries to use magic inside of an area and telling mage of their location."
          ],
          "others":[
            {
              "+1 Reach":" The mage knows the exact Arcana – as well as their rating in dots – of the person who tries to use magic inside the area."
            },
            {
              "+1 Reach":" The mage knows the exact spell which is used inside the area."
            }
          ]
        },
        {
          "id":207,
          "identity":{
            "name":"Supernal Attendance (Prime •)",
            "author":"by Taldorblackfire"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Potency",
            "suggested rote skills":" Investigation, Survival, Streetwise"
          },
          "description":[
            "This spell will instantly tell the caster how many Sleepwalkers or Mages or Proximi may be in the area designed by this spell. Each level of Potency allows the Mage to select a different type of subject to be detected by this spell. Those protected by a veiling spell invoke a Clash of Wills with the target along with any other type of spell/effect that might conceal a target from detection."
          ],
          "others":[
            {
              "+1 Reach":" The Mage knows the independent numbers of subjects instead of just a lump sum."
            },
            {
              "Add Matter ●":" The spell will reveal imbued items, enchanted items, and artifacts"
            }
          ]
        }
      ],
      "apprentice":[
        {
          "id":208,
          "identity":{
            "name":"Abyssal Lure (Prime ••)",
            "author":"by amechra"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "withstood":" Resolve",
            "suggested rote skills":" Academics, Larceny, Occult."
          },
          "description":[
            "Whoever first thought of this spell was a dick. It doesn't do anything on its own - instead, it’s designed to sit on the soul of a Banisher or Sleeper, aggravating their personal shards of the Abyss. This spell gives the subject 9-again on any Dissonance or Paradox rolls they make. This spell only affects targets with the Integrity advantage."
          ],
          "others":[
            {
              "+1 Reach":" The lump of magic metastasises like a really good cancer - the Sleeper gets 8-again on the Dissonance or Paradox rolls instead."
            },
            {
              "+1 Reach":" The Sleeper also gains the Lie merit."
            },
            {
              "+1 Reach":" The mage managed to cage a sliver of the Abyss in the imago of this spell (or some managed to slip in) - whenever the subject of the spell makes a Dissonance roll, they also roll a chance die as a Paradox Backlash on this spell, modified as normal. The subject of the spell is considered to be of Understanding Wisdom for the purposes of the Duration of Paradox effects."
            },
            {
              "Invite Paradox into the Spell":" If the mage has already spent Reach to provoke Paradox Backlashes, they may funnel any Reach they take control of into those dice pools, increasing the number of dice the subject rolls by one for each Reach funneled into it."
            }
          ]
        },
        {
          "id":209,
          "identity":{
            "name":"Abyssal Ward (Prime ••)",
            "author":"by Taldorblackfire"
          },
          "properties":{
            "practice":" Shielding",
            "primary factor":" Potency",
            "withstand":" Resolve (unwilling subjects only)",
            "suggested rote skills":" Manipulation, Empathy, Occult"
          },
          "description":[
            "This spell wards the subject from creatures of the Abyss, meaning they gain general armor dots equal to their Prime dots against Abyssal Creature attacks and Numina as the Truth shields the subject from the Lie. Each successful use of a Numina or attack by an Abyssal creature reduces the Potency of this spell by 1 point."
          ]
        },
        {
          "id":210,
          "identity":{
            "name":"Aphasia (Prime ••)",
            "author":"by amechra"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Duration",
            "withstand":" Composure",
            "rote skills":" Expression, Socialize, Subterfuge"
          },
          "description":[
            "Language is rooted in the mind's ability to decipher symbols - and this spell renders a specific set of symbols indecipherable. Within this spell's Area, a particular language becomes gibberish - it can't be spoken, read, or written, and anyone inside the Area finds that they cannot understand it if they somehow hear a sample."
          ],
          "others":[
            {
              "+1 Reach":" Rather than targeting a particular language, the spell can instead suppress the symbols of a particular subculture. In that case, any meaningful communication regarding that subculture is doomed to failure; and, as a side effect, any Yantra rooted in that subculture is unusable within the area."
            }
          ]
        },
        {
          "id":211,
          "identity":{
            "name":"Brand of the Deceiver (Prime ••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "withstand":" Composure",
            "suggested rote skills":" Academics, Empathy, Socialize"
          },
          "description":[
            "The world listens when an arbiter of Truth proclaims the guilt of a deceiver. An Apprentice of Prime is capable of placing a Rune, visible only to those with Mage Sight, on a subject with the Guilty Condition that clearly marks them as a liar or a traitor. What’s more, although non-Mages cannot see the rune, its Supernal Truth leaks into the subject’s pattern regardless, causing them to start any social maneuvering attempt at one impression level lower than they normally would."
          ],
          "others":[
            {
              "+1 Reach":" The spell may be replaced on a subject without the Guilty Condition, so long as the caster knows they have lied about something within the current scene. Note that it has to be a lie - simply being factually incorrect won’t allow the use of this Reach effect."
            },
            {
              "+2 Reach":" As the above Reach effect, but the subject also gains the Guilty Condition."
            }
          ]
        },
        {
          "id":212,
          "identity":{
            "name":"Cassandra's Curse (Prime ••)",
            "author":"by Strill"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Duration",
            "suggested rote skills":" Politics, Subterfuge, Occult"
          },
          "description":[
            "Just like the prophet who always spoke the truth but was cursed so that no one believed her, the mage conceals all truth the subject speaks. Everyone who listens to her words is left with the impression that she's either lying, ignorant, or confused. If the spell adds a tinge of falsehood to statements that Sleeper witnesses are absolutely certain is true, those Sleepers may suffer Quiescence if they think about the contradiction too much."
          ],
          "others":[
            {
              "+1 Reach":" Listeners perceive the subject to not just be confused or mistaken, but outright lying."
            },
            {
              "+1 Reach":" The spell affects all forms of communication the subject engages in."
            },
            {
              "+1 Reach":" The mage can restrict the curse to apply only to particular facts or categories. (e.g. 'My company's illegal financial dealings', 'The secret tunnels underneath my house', 'Statements made while performing as a fortune teller')."
            }
          ]
        },
        {
          "id":213,
          "identity":{
            "name":"Control Nimbus (Prime ••)",
            "author":"by Strill"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Duration",
            "withstand":" Resolve",
            "suggested rote skills":" Larceny, Persuasion, Occult"
          },
          "description":[
            "The mage manipulates the subject’s Nimbus. For the spell’s Duration, the mage can cause the Nimbus to flare when it would not, or to fail to flare when it otherwise would. The spell may also cause it to continuously flare, applying its Nimbus Tilt to those who see it for as long as they continue to see it flare.",
            "If the Nimbus has been detached from its owner, such as with the Sever Nimbus spell, this spell also allows the mage to move the Nimbus around within sensory range."
          ],
          "others":[
            {
              "+1 Reach and add Fate •":" The mage may cause the subject's Nimbus to flare towards specific targets, applying the Nimbus Tilt to them if they can see it, but not to others."
            },
            {
              "1 Mana":" The mage may reveal the subject’s Nimbus to the Fallen World, affecting even those not using Mage Sight. Sleepers suffer Quiescence after the Tilt ends."
            },
            {
              "1 Mana":" The mage imprints the target's Signature Nimbus on a single object, place, or person. (See Signature Nimbus p.90)."
            }
          ]
        },
        {
          "id":214,
          "identity":{
            "name":"Cult Leader (Prime ••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Duration",
            "suggested rote skills":" Occult, Persuasion, Intimidation"
          },
          "description":[
            "This spell causes the very air around the subject to be filled with what sparse mystical and magical potential is still present in the Fallen World, a reflection of the Aether itself. As a result, people feel as though they are in the presence of some sort of great authority, some might even mistakenly believe the subject is an angel or some other form of divine agent. During Social Maneuvering, this removes Doors equal to Potency."
          ]
        },
        {
          "id":215,
          "identity":{
            "name":"Liar's Mark (Prime ••, Life •)",
            "author":"by Emerick"
          },
          "properties":{
            "practice":" Ruling/Unveiling",
            "primary factor":" Duration",
            "withstand":" Composure",
            "suggested rote skills":" Medicine, Empathy, Survival"
          },
          "description":[
            "By linking his mind to the estatic truth of the Primal Wilds, the subject’s eyes are more alert of the telltale signs of lies and he is more quick to catch up on body language. The subject gains the Informed condition for the purpose of determining what are the reasons of a person for lying to him."
          ],
          "others":[
            {
              "+1 Reach":" The mage removes social doors equal to the potency of the spells as his body is in tune with his victim in a primal level."
            },
            {
              "+1 Reach and 1 Mana":" The mage knows his victims lies and impose the Guilty or Leveraged condition."
            },
            {
              "+1 Reach and 1 Mana":" The mage brands the subject with an invisible rune marking the victim as a liar, thus lowering by one impression level of the victim by level of potency."
            }
          ]
        },
        {
          "id":216,
          "identity":{
            "name":"Magic Shield (Prime ••)",
            "author":"by Dark Archon"
          },
          "properties":{
            "practice":" Shielding",
            "primary factor":" Duration",
            "suggested rote skills":" Occult, Athletics, Expression"
          },
          "description":[
            "This simple and tried spell is commonplace in Awakened society; even mages who don't study Prime do try to at least have an Imbued Item with this spell. It simply protects the user against any and all spells being cast on him; the other caster needs to win Clash of Wills with spell caster to affect the subject of Magic Shield. Moving to Advanced Potency gives +1 die per Potency in this Clash of Wills, and Duration gives its usual benefits."
          ],
          "others":[
            {
              "+1 Reach":" The caster can temporarily suppress this spell to allow a friendly mage to work his magic on him any time he wants to do that."
            },
            {
              "+1 Reach and add Space ••":" The mage may act as 'shield-bearer', using his own shield to cover an ally he has a sympathetic connection with. The spell needs to use Sympathetic Yantra at casting to allow this effect; the mage needs a separate Yantra for each mage he wants to cover up in that way."
            }
          ]
        },
        {
          "id":217,
          "identity":{
            "name":"OotS Reference (Prime ••)",
            "author":"by Five Eyes"
          },
          "properties":{
            "practice":" Shielding",
            "primary factor":" Potency",
            "suggested rote skills":" Occult, Crafts, Intimidation"
          },
          "description":[
            "This spell alters the function of a set of High Speech runes. When the runes are invoked as a yantra during the creation of an Imago, in addition to providing the usual dice benefit, they will 'contain' the spell anchored to them. If the Potency of this spell meets or exceeds that of the anchored spell, the anchored effect does not take place, remaining ineffectual until OotS Reference is dispelled or lapses. If cast upon an active set of runes that are already anchoring a spell, OotS Reference can temporarily suppress an anchored effect (Potency permitting.)"
          ],
          "others":[
            {
              "+1 Reach":" If the runes are marred or defaced, OotS Reference will end and the anchored effect will be released instead of being disrupted, taking effect on whatever the runes were inscribed upon for the rest of its Duration."
            },
            {
              "+2 Reach":" As above, but the released effect will instead turn upon the person or object that damaged the runes, if they are a valid target."
            }
          ]
        },
        {
          "id":218,
          "identity":{
            "name":"Reinforce Pattern (Prime ••)",
            "author":"by Menace"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "suggested rote skills":" ?"
          },
          "description":[
            "This spell allows the Mage to infuse the subject with Mana, restoring Health or Structure up to a maximum equal to potency. It takes 3 mana to restore a point of lethal or bashing damage or Structure. Alternatively, 3 mana can be spent to remove a single physical Tilt or mental condition."
          ],
          "others":[
            {
              "+1 Reach and 3 Mana":" For 3 mana the subject gains a single dot in a physical attribute."
            }
          ]
        },
        {
          "id":219,
          "identity":{
            "name":"Sum of All Parts (Prime ••)",
            "author":"by Gantolandon"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Duration",
            "suggested rote skills":" Craft, Stealth, Subterfuge"
          },
          "description":[
            "The spell masks the connection of an item with its Supernal idea, which makes recognizing its purpose impossible. A table becomes a flat surface raised on four legs; a car is perceived as a metal contraption on wheels. Other people can still try to improvise and deduce properties of the occluded item: if something has wheels, for example, it almost certainly can be pushed around. Using it effectively, however, is nearly impossible - a fencer may still wield a sword as an improvised cutting weapon, but it doesn’t give him more advantage than a sharp piece of metal would.",
            "This provides an opportunity to hide a weapon in plain sight or make a piece of contraband pass a casual search. This still carries a risk - the airport security guard may still react with suspicion, seeing someone with a steel cylindrical implement in their hands. A careful examination of an item (which may require dismantling) lets someone sufficiently curious determine what the item actually is. For a Sleeper, this almost always triggers Disbelief. Seeing the veiled tool actually work as intended may have the same effect."
          ],
          "others":[
            {
              "+1 Reach":" The spell also connects the object with the Supernal idea of decoration. This lets the mage blend the item with their clothes or home appliances - a bomb displayed proudly on the table is just a weird-looking knick-knack."
            },
            {
              "+2 Reach":" Allows an object to pass for another one"
            }
          ]
        },
        {
          "id":220,
          "identity":{
            "name":"Understand the Platonic Form (Prime ••)",
            "author":"by Poseur"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "suggested rote skills":" Academics, Crafts, Expression"
          },
          "description":[
            "The Aether is where the platonic forms exist, and fallen objects are mere flawed versions of perfect symbols. However, objects are still these symbols given flawed form in Fallen reality and this spell allows the mage to perceive its true symbolism and align the object more closely to its symbol and by doing so getting a clearer understanding of the use of the object. This spell gives the user of the object the 9-again quality for rolls to use the object for a number of rolls equal to Potency for the Duration."
          ],
          "others":[
            {
              "+1 Reach":" gets the 8-again quality."
            },
            {
              "+1 Reach":" the user gets the Informed condition about the use and function of the item."
            }
          ]
        }
      ],
      "disciple":[
        {
          "id":221,
          "identity":{
            "name":"Bend to the Winds (Prime •••)",
            "author":"by Iladas"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "suggested rote skills":" Athletics, Occult, Science"
          },
          "description":[
            "This spell allows the mage to redirect an aimed Supernal spell or Legacy attainment that is directly targeting her. When a mage could use her Defense against an aimed spell, she may use this spell instead to redirect it as an instant action. If cast with a prolonged Duration, the mage may take a Dodge action each turn and use this spell instead of receiving the normal benefits for Dodging. The spell allows the mage to turn a number of aimed spells directed at her up to this spell’s Potency. She does not have fine control over where each spell is deflected, and the spell cannot make spells reverse direction entirely, only veer off target. By default, the Storyteller determines a random direction for the spell to travel when redirected."
          ],
          "others":[
            {
              "+1 Reach":" The mage can use Bend to the Winds’ effect as a reflexive action instead."
            },
            {
              "+1 Reach":" The mage may control where the spell is redirected to, as long as it is within 90 degrees of the original arc in any direction."
            },
            {
              "+1 Reach and Add Time • ":" The mage can turn spells too fast for her to gain Defense against them."
            },
            {
              "+1 Reach and Add any Other Arcanum • ":" By adding the relevant Arcanum, a mage can turn truly magical effects by other sources of power — Spirit to turn a Blast Numina, Fate to deflect a Changeling’s Contract, and so on. This would not work against a Werewolf’s claws or car thrown with a Promethean’s prodigious strength."
            },
            {
              "+2 Reach":" The spell is fully reversed and targets their user."
            }
          ]
        },
        {
          "id":222,
          "identity":{
            "name":"Clarification (Prime •••)",
            "author":"by Justin Sane"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Potency",
            "suggested rote skills":" ?"
          },
          "description":[
            "When Focusing his Mage Sight and attempting Revelation, the subject can ignore the penalty caused by Opacity, up to this spell's Potency."
          ]
        },
        {
          "id":223,
          "identity":{
            "name":"Empower Nimbus (Prime •••)",
            "author":"by Strill"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "suggested rote skills":" Intimidation, Persuasion, Occult"
          },
          "description":[
            "The mage can strengthen the subject’s Nimbus, making their Nimbus Tilt more powerful. Choose an Attribute or Skill which the subject’s Nimbus Tilt affects. If the Nimbus tilt applies a bonus to that trait, the bonus increases by the spell’s potency. If a penalty, the penalty worsens by the spell’s potency.",
            "If the mage targets himself with this spell, this spell affects its own Nimbus Flare as well.",
            "This spell also improves the Nimbus’ ability to contest the auras of other supernatural creatures. Add the spell’s Potency to any contested roll between the subject’s aura and another creature’s aura."
          ],
          "others":[
            {
              "+1 Reach":" The spell affects an additional Attribute or Skill covered by the subject’s Nimbus tilt. Divide the spell’s Potency between both. This effect may be applied multiple times."
            }
          ]
        },
        {
          "id":224,
          "identity":{
            "name":"Palimpsest (Prime •••)",
            "author":"by Five Eyes"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Academics, Crafts, Expression"
          },
          "description":[
            "This effect allows additional spells to be anchored to a single set of High Speech runes. Casting an additional spell into the runes requires the expenditure of one mana during formation of its Imago. The secondary spell may make use of the yantra bonus of the runes (without having to take a ritual interval to inscribe them) and is also disrupted if the runes are erased or defaced.",
            "The Palimpsest can hold a number of spells equal to its Potency (in addition to the first spell.) If the Palimpsest is dispelled or its Duration lapses, the secondary spell is lost."
          ]
        },
        {
          "id":225,
          "identity":{
            "name":"Phantasm (Prime •••)",
            "author":"by Dark Archon "
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Expression, Crafts, Subterfuge"
          },
          "description":[
            "This spell creates an inanimate phantasm, a construct woven of Mana threads. Such a creation possesses a degree of substance and appears to be a normal object of its type to Sleeping eyes, but is in reality a solidified illusion. The mage can create books, knives, chairs, stones or any other lifeless, inanimate objects she can think of. These objects do not and cannot possess qualities such as conductivity, magnetism or the like, because they aren't matter in the magical sense of this word.",
            "The spell creates an object of Size 5 or less. The phantasm has one point of Durability. It is fragile and breaks easily. The mage cannot create functional tools, weapons or armor at this level. To create a convincing illusion, a reflexive Intelligence + appropriate Skill roll is required, and excess successes on the casting add one die each to this roll. To simulate an animal, use Animal Ken. For an object, use Crafts. For a person, use Medicine or perhaps Empathy."
          ],
          "others":[
            {
              "+1 Reach":" The mage creates a more sturdy phantasm, which can be a functional tool, weapon or armor. Weapons created in this way deal lethal damage, and armor works as normal armor."
            },
            {
              "+1 Reach":" Created object has simultaneously Ephemeral Enchantment casted on it."
            },
            {
              "+2 Reach and 1 Mana":" The mage imbues phantasm with celestial power, creating a short-timed magical item. Weapons, created in this way, deal aggravated damage, and armor works as Prime Armor in addition to being normal armor at the same time. Cost"
            }
          ]
        },
        {
          "id":226,
          "identity":{
            "name":"Power Glows (Prime •••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Medicine, Occult, Expression"
          },
          "description":[
            "Mana is normally invisible and intangible. Under Mage Sight it may appear as a fiery, fluid energy of pure white or a prismatic color. With this spell the mage condenses the Mana in his pattern into a more concentrated form.The benefit of this is that the mage's pattern can contain more of this condensed Mana than regular Mana, increasing the mage's Mana capacity by Potency. However, the drawback to this is that the condensed Mana is visible to all and causes the mage's body to emit a faint light. At high Potency the mage's veins may even start to glow up and light may emit from the eyes and throat. If the spell expires, any Mana beyond the mage's capacity is lost."
          ],
          "others":[
            {
              "Add Any Other Arcanum •":" By using the relevant Arcanum/Arcana the mage may now condense the mystical energy (Essence, Vitae, etc) of other supernatural entities as well. This will carry the same drawback of making that energy visible in some way for all to see."
            }
          ]
        },
        {
          "id":227,
          "identity":{
            "name":"The Road Less Traveled (Prime •••)",
            "author":"by Justin Sane"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" ?"
          },
          "description":[
            "The Mage can impose his personal symbolism on a Tool Yantra, making it resonate with his Path."
          ],
          "others":[
            {
              "+1 Reach":" The Mage can impose the symbolism of a different Tool. For example, he can cause a simple stick to have the symbolism of a Coin."
            }
          ]
        },
        {
          "id":228,
          "identity":{
            "name":"Sanctify Space (Prime •••, Space ••)",
            "author":"by espritdecalmar"
          },
          "properties":{
            "practice":" Perfecting",
            "primary spell factor":" Duration",
            "withstand":" Safe Place",
            "suggested rote skills":" Occult, Persuasion, Survival"
          },
          "description":[
            "For the willworker on the go, this spell aligns a location with the mage's mystical practice, granting the Sanctum Merit at a dot rating equal to Potency (to a maximum of five). The spell is Withstood if the affected area encompasses or is part of an existing Safe Place that does not belong to the mage."
          ]
        },
        {
          "id":229,
          "identity":{
            "name":"Souvenir (Prime •••)",
            "author":"by Five Eyes"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Academics, Occult, Larceny"
          },
          "description":[
            "This spell invests an object with the significance of an Environment. The object can be used as a Tool Yantra in situations where the location's symbolism would be relevant, providing the usual +1 bonus. It may be evoked in this fashion up to once per level of Potency."
          ],
          "others":[
            {
              "+1 Reach and 1 Mana":" The spell may invest an object with a Verge or Demesne's symbolism. The Tool provides a +2 die bonus and, while it cannot totally negate Paradox, does act as a Dedicated Tool."
            }
          ]
        },
        {
          "id":230,
          "identity":{
            "name":"Suffer Not The Witch (Prime •••)",
            "author":"by amechra"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "withstand":" Stamina",
            "suggested rote skills":" Intimidation, Medicine, Occult"
          },
          "description":[
            "An old 'favorite' amongst Banishers, this spell messily purges mana from a Pattern. The target must immediately spend Mana equal to the spell's potency on absolutely nothing - if this would exceed their limit on mana spent each turn, they continue wasting mana until they have either spent a total amount of Mana equal to the spell's potency or the spell ends. As a side effect, any Mage targeted by this spell immediately flares a warped version of their Nimbus - it lasts for the full Duration of the spell, though it doesn't impose their Nimbus Tilt."
          ],
          "others":[
            {
              "+1 Reach":" The victim of the spell also suffers from the Nausea tilt - this is not considered part of the spell's effects, and therefore doesn't end when the spell does."
            },
            {
              "+1 Reach":" If the victim was under the effects of Active Mage Sight or Mage Armor, they immediately end. For the Duration of the spell, reactivating either effect costs an additional point of Mana."
            },
            {
              "+1 Reach":" The victim must immediately scour their Pattern - doing so doesn't grant them additional Mana (or whatever other benefit they would receive from the scouring)."
            }
          ]
        },
        {
          "id":231,
          "identity":{
            "name":"Supernal Disconnect (Prime •••)",
            "author":"by Taldorblackfyre "
          },
          "properties":{
            "practice":" Fraying",
            "primary factor":" Potency",
            "cost":" Varies (See Below)",
            "withstand":" Gnosis",
            "suggested rote skills":" Occult, Larceny, Intimidation"
          },
          "description":[
            "A mage can reduce the Supernal Connection a person possesses, making it harder for them to use magical tools with a connection to the Supernal World. Any attempt to use a magical item by the subject of this spell suffers a penalty equal to Potency on a number of uses equal to Potency."
          ],
          "others":[
            {
              "+2 Reach":" This spell inflicts a penalty equal to Potency on all spells cast by the subject for a number of rolls equal to Potency."
            },
            {
              "+1 Reach":" This spell can affect Focused Mage Sight acting as a penalty equal to Potency on a number of Scrutiny Rolls equal to the Potency."
            },
            {
              "+1 Reach and 1 Mana":" This spell can reduce the number of merit dots equal to Potency available to Sleepwalkers involving their connection to the Supernal Realms (Banner-Bearer, Relic Attuned, etc)."
            }
          ]
        },
        {
          "id":232,
          "identity":{
            "name":"Unlocking the Brighter Road (Prime •••)",
            "author":"by Sir Bardiel"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Potency",
            "suggested rote skills":" Craft, Survival, Occult"
          },
          "description":[
            "This spell reinforce the supernal connection between the mage and his tower, thus providing a safer route to bring forth Supernal entities. It grants [Potency] extra rolls to the extended action required to Summon one."
          ],
          "others":[
            {
              "+2 Reach":" the extra rolls are extra safe so there can't be an abyssal incursion."
            },
            {
              "+1 Reach":" the extra rolls get 9-again."
            }
          ]
        },
        {
          "id":233,
          "identity":{
            "name":"Words Unbound (Prime •••)",
            "author":"by Menace"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "suggested rote skills":" Expression, Academics"
          },
          "description":[
            "Although God twisted human tongues for the sin of constructing a tower to heaven, all languages are still a way of transfering truth between people. The mage can bolster that truth making it pierce through the barrier of words and phrases. The subject is understood by anyone present regardless of any language she is speaking. He may even speak gibberish and others will still understand the meaning behind his words."
          ]
        }
      ],
      "adept":[
        {
          "id":234,
          "identity":{
            "name":"Create Tass (Prime •••)",
            "author":"by LadyLens"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "suggested rote skills":" Academics, Craft, Occult"
          },
          "description":[
            "With this spell, a mage can channel Mana (normally a cabal-mate's) into a tangible form, such as water in a sports bottle, creating Tass. This Tass is subject to the normal rules concerning its use. Each point of Potency creates approximately 120ml of drinkable liquid Tass, 100 grams of edible solid Tass, or 100 grams of non-edible Tass. Edible or drinkable Tass are the most common forms. By way of reference, 120ml is effectively a third of a typical soft drink can, and 100 grams is the mass of a large sausage roll or a small orange."
          ],
          "others":[
            {
              "+2 Reach":" The effect is Lasting."
            }
          ]
        },
        {
          "id":235,
          "identity":{
            "name":"Manifest Truth (Prime ••••)",
            "author":"by Mrmdubois"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "recommended skills":" Occult, Craft, Expression"
          },
          "description":[
            "Taking a lesson from the Ascended who leave behind bodies of crystallized Resonance, a Mage with Prime can cause other sources of Resonance to similarly crystallize. The Resonance always takes a form that's appropriate to the Resonance's flavor, for instance Life Resonance might take the form of a crystalline flower. Unlike the artifacts left behind by the Ascended, these objects have no artifact-like powers. They do however serve as +1 Persona Yantra on an applicable spell like a Mage drawing on the power of a Ley Line or Node. They also count as Resonant to appropriate ephemeral creatures."
          ],
          "others":[
            {
              "+1 Reach":" The Mage can choose the appropriately themed form that the Resonance takes."
            },
            {
              "Add another Arcana ••••":" The crystallized Resonance doesn't have to adhere to a crystalline structure. Fire Resonance burns and Flower Resonance can be planted and bloom in its season."
            }
          ]
        },
        {
          "id":236,
          "identity":{
            "name":"Scribe Schematic (Prime ••••)",
            "author":"by proindrakenzol"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Potency",
            "cost":" 1 Mana",
            "withstand":" Total Arcanum dots of all Arcana used in the spell being scribed.",
            "suggested rote skills":" Crafts, Science, Occult"
          },
          "description":[
            "By means of this spell, the mage encodes a Rote in a way that makes it easier to create Imbued items of that Rote. This spell can be used in two different ways: to copy an existing Schematic or to inscribe a Rote the Mage knows into a Schematic.",
            "Only a single Rote can be inscribed per casting of this spell, but a given Schematic may hold multiple Rotes at a time. When this spell's Duration expires, the inscribed Rotes fade and cannot be recovered."
          ],
          "others":[
            {
              "+1 Reach and 1 Mana":" For one point of Mana, the spell's Duration is Lasting."
            },
            {
              "Schematic (• to •••••)":" Schematics are Grimoire like objects designed to aid in the creation of Imbued items. Originally created by the ancient Forge Masters to ease in the Imbuing of common items, a similar process using more modern notation was created by the Thaumatech Engineers for the same reason; the Thaumatech Engineers claim independent creation based on logical extrapolation from Grimoires, whereas many in the Forge Masters claim theft of proprietary secrets of their Legacy.Regardless of which version of this process is learned (or if it's developed independently) the results are the same, crafting an Imbued item while following a schematic doubles the interval required for Imbuement, but grants the rote action quality to the Imbuement rolls.Each dot in this Merit allows for the Schematic to contain one ote of any Arcanum rating."
            }
          ]
        },
        {
          "id":237,
          "identity":{
            "name":"Spell Steal (Prime ••••)",
            "author":"by Enlightened_Milkman"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "cost":" 1 Mana (Not sure about this)",
            "withstand":" Arcanum Rating of target spell",
            "suggested rote skills":" ?"
          },
          "description":[
            "Instead of merely Dispelling a spell, the mage takes control of an active spell as though they were the one to cast it. (i.e. takes up spell control slots). The mage must be able to perceive the spell either through active Mage Sight or other means."
          ],
          "others":[
            {
              "+1 Reach":" Alternatively, the mage can use the spell to switch the targets of an active spell or a spell being cast (e.g. a spell that drains the life of everyone in the area will instead funnel the life of the original caster towards everyone in the area)."
            },
            {
              "+2 Reach, 1 Mana and Time ••":" The spell can be cast reflexively."
            },
            {
              "Spirit ••, Mind ••, Death ••":" The spell can now steal Numina from the relevant ephemeral entity (Withstand changes to Rank. Cannot be used on Rank 6+)."
            }
          ]
        }
      ],
      "master":[
        {
          "id":238,
          "identity":{
            "name":"Heretical Law (Prime •••••)",
            "author":"by backtoback"
          },
          "properties":{
            "practice":" Unmaking",
            "primary factor":" Potency",
            "withstand":" Rank",
            "suggested rote skills":" Occult, Intimidation, Expression"
          },
          "description":[
            "The mage inflicts blasphemy towards the Supernal by destroying its being's connection to it. For the Duration of this spell, any Supernal being affected by this spell is always considered to be outside of their summoning circle, and suffers additional Corpus damage equal to Potency above its rank for every 30 minutes. Also, when it 'dies' from anything other than taking damage from Paradox, which will be taken by the Abyss as normal, its 'body' will remain in the Fallen World for as long as the spell's Duration. When the spell ends, the body is then instantly taken to the Abyss. If this spell is inflicted on an Area, any attempt at Supernal summoning in this Area will fail and will instead summon an Abyssal being."
          ]
        },
        {
          "id":239,
          "identity":{
            "name":"Line in the Sand (Prime •••••)",
            "author":"By Mrmdubois"
          },
          "properties":{
            "practice":" Making",
            "primary factor":" Duration",
            "suggested rote skills":" Occult, Academics, Streetwise"
          },
          "description":[
            "A Mage may create a ley line from nothing and determine its Resonance. The ley line can only extend as far as the Scale of the spell permits. This sends mystical shockwaves throughout the affected area similar to the creation of a new Hallow."
          ]
        },
        {
          "id":240,
          "identity":{
            "name":"Shatter Symbolism (Prime •••••)",
            "author":"by Custos Tenebrarum"
          },
          "properties":{
            "practice":" Unmaking",
            "primary factor":" Potency",
            "suggested rote skills":" ?"
          },
          "description":[
            "This Spell weakens supernal symbolism in the area. Within the area, Yantras rated less than Potency are nullified."
          ]
        }
      ]
    }
  },
  {
    "space":{
      "initiate":[
        {
          "id":241,
          "identity":{
            "name":"House Whisperer (Space •)",
            "author":"by espritdecalmar"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Potency",
            "suggested rote skills":" Crafts, Streetwise, Survival"
          },
          "description":[
            "The mage tunes into a location to learn its secrets. With an instant action, the mage can ask a number of the following questions equal to the spell's Potency:",
            "- What is the purpose of this location?",
            "- How is the location demarcated?",
            "- Where are the entrances and exits?",
            "- What is the location's dot rating in Safe Place/Sanctum/Haven/etc?",
            "- What is the nature of the location's inhabitants?",
            "- Are there any Irises within the location?",
            "- What is one of the location's flaws?"
          ],
          "others":[
            {
              "+1 Reach":" When asking about Irises, the mage also learns the location of one Iris (if there are any) and a general idea of where it leads."
            },
            {
              "Add Death •":" The mage can ask if there are any anchors in the location, or if the location itself is an anchor."
            },
            {
              "Add Forces •":" The mage can ask for the location for a source of energy within the location, or if the location is under the effects of an Extreme Environment."
            },
            {
              "Add Spirit •":" The mage can ask for one of the location's Resonant Conditions, or if the space is a Locus."
            },
            {
              "Add Time •":" The mage can ask how the location has changed since a given time or event. Temporal Sympathy applies."
            }
          ]
        },
        {
          "id":242,
          "identity":{
            "name":"Never Lost (Space •)",
            "author":"by Menace"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Duration",
            "suggested rote skills":" ?"
          },
          "description":[
            "A mage with a basic understanding of Space is never lost. This spell allows the subject to instinctively locate known places. He can determine the direction in which he'll find any one place per dot of Potency he has visited. Alternatively, for one dot of Potency he can know which way is North."
          ],
          "others":[
            {
              "+1 Reach":" The subject can determine his general location ( 'Jakarta', 'Saharan desert', 'the Amazonian Jungle')."
            },
            {
              "+2 Reach":" The subject knows his specific locations ('apartment 5, Baker Street 29, Mysteryville')."
            }
          ]
        },
        {
          "id":243,
          "identity":{
            "name":"Nothing Between (Space •)",
            "author":"by SoulGambit"
          },
          "properties":{
            "practice":" Unveiling",
            "primary factor":" Potency",
            "suggested rote skills":" Investigation, Science, Empathy"
          },
          "description":[
            "If Space is a lie, it must follow that distance is a lie. By means of this spell, a Mage may examine objects much farther than normally possible: reading small print on the other side of the room or counting hairs on someone's head as though they were right next to it.",
            "Multiply the distance at which the subject can see before suffering penalties by this spell's Potency. Atmospheric conditions may impact this vision, as it effectively creates a telescope."
          ],
          "others":[
            {
              "+1 Reach":" This spell allows the subject to see out to a distance of Space miles."
            },
            {
              "+1 Reach":" This spell applies to hearing as well as sight."
            },
            {
              "+1 Reach":" This spell can ignore intervening atmospheric conditions."
            }
          ]
        },
        {
          "id":244,
          "identity":{
            "name":"Sense Bending (Space •)",
            "author":"by Dark Archon"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Duration",
            "suggested rote skill":" ?"
          },
          "description":[
            "Space magic is a great way to enter locations by making your own entrances and exits; naturally there is a desire to detect such intruders. This spell tells if some person tried to bend space inside the area (with purpose of move; spells using Sympathy and alike don't get noticed) and tells location of that person to the caster."
          ],
          "others":[
            {
              "+1 Reach":" The mage knows the level of Space of the person who tried to bend space inside the area."
            }
          ]
        },
        {
          "id":245,
          "identity":{
            "name":"Spatial Map (Space •)",
            "author":"by Aquatica1000"
          },
          "properties":{
            "practice":" Unveiling",
            "primary factor":" Duration",
            "suggested rote skills":" Firearms, Investigation, Occult"
          },
          "description":[
            "Allows Space Mage to use Space Arcana to 'see' surroundings and negate penalties due to range as well as darkness and similar poor visibility. Only works in the 'Sensory' range, and, unlike Outward and Inward Eye, cannot be used to perceive things from all directions."
          ]
        }
      ],
      "apprentice":[
        {
          "id":246,
          "identity":{
            "name":"The Doorway Effect (Space ••)",
            "author":"by Neros"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "withstand":" Composure",
            "suggested rote skills":" Academia, Survival, Expression"
          },
          "description":[
            "The Doorway Effect is what happens when you leave a room and forget why you left it. This spell however ensures that the effect happens, making the subject forget the reason they left a room. This can happen a number of times equal to the spell's Potency and only non-threatening or urgent reasons can’t be forgotten."
          ],
          "others":[
            {
              "+1 Reach":" Even something threatening and urgent will be forgotten. However, if the danger or the urgency is still there, it would remind the subject."
            }
          ]
        },
        {
          "id":247,
          "identity":{
            "name":"Hand of Benediction (Space ••)",
            "author":"by Moinen"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Duration",
            "suggested rote skills":" Subterfuge, Athletics, Medicine"
          },
          "description":[
            "This spell allows its caster to interact physically on a simple basis (e.g. Touch) within sensory range. Number of possible interactions equals potency, while the spell is active. Everything the caster touches or works with has its full effect on her, e.g. interacting with a flame causes burns and blisters upon her hand, as if she physically touched the fire. Touching a moving object requires the usual test (Dexterity + Athletics / Brawl / Firearms)."
          ],
          "others":[
            {
              "+1 Reach":" Subjects of the spell may perform more complicated tasks, like fixing a mechanism or writing on a keyboard."
            },
            {
              "+1 Reach":" Subjects of the spell may perform extended mundane tasks, each interval counting towards the total number of interactions granted by potency."
            },
            {
              "+1 Reach and 1 Mana":" Tasks may be done remotely. (e.g. through Scrying spell)."
            }
          ]
        },
        {
          "id":248,
          "identity":{
            "name":"Iron Chains (Space ••)",
            "author":"by Nepher"
          },
          "properties":{
            "practice":" Shielding",
            "primary factor":" Duration",
            "suggested rote skills":" Socialize, Politics, Empathy"
          },
          "description":[
            "This spell targets a Sympathetic connection. As long as the spell endures, this link cannot be altered in strength or quality by mundane events: he'll remain in the friendzone, she'll never manage to get a divorce, this kid will never get bored of his favorite toy."
          ],
          "others":[
            {
              "+1 Reach":" The spell can take two targets not connected by a sympathetic link. It prevents any meaningful relationship to develop, maintaining their sympathy null."
            },
            {
              "+1 Reach":" Even the supernatural can't break the Iron Chain. Any attempt to alter the sympathetic connection provokes a Clash of Will."
            }
          ]
        },
        {
          "id":249,
          "identity":{
            "name":"Pythagorean's Razor (Space ••)",
            "author":"by Arduras"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Duration",
            "suggested rote skills":" Athletics, Firearms, Academics"
          },
          "description":[
            "Essentially 'Quantum Flux' but with Space - pinching it, bending it, calculating ranges and angles, calculating away deleterious factors, instead of any mundane actions it's specifically actions that could benefit from having the distance of travel reduced or the vector nudged to 'slightly unnatural' accuracy. Mainly for ranged attacks."
          ]
        },
        {
          "id":250,
          "identity":{
            "name":"Secret Identity (Space ••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Duration",
            "suggested rote skills":" Investigation, Politics, Subterfuge"
          },
          "description":[
            "This spell enhances the Shadow Name Merit's ability to hide one's mundane identity. Any investigation to uncover the subject's mundane identity that uses evidence created while in their Shadow persona automatically fails.",
            "Any attempt to use any Sympathy or Temporal Sympathy created while the subject is in their Shadow persona to identify their mundane persona provokes a Clash of Wills.",
            "This spell has no effect on those that already know that both the subject's Shadow and mundane persona are one person."
          ],
          "others":[
            {
              "+1 Reach":" Rather than a Clash of Wills, any Sympathy or Temporal Sympathy created in the subject's Shadow persona cannot be used at all while in their mundane persona. Any attempt to do so will only tell the scrying mage that the target 'does not exist'."
            },
            {
              "+1 Reach":" The spell can now affect any mage with a Shadow name regardless of whether they have the Shadow Name Merit or not."
            },
            {
              "+2 Reach":" The spell can now affect anybody with the Alternate Identity Merit."
            }
          ]
        }
      ],
      "disciple":[
        {
          "id":251,
          "identity":{
            "name":"Broken Heartstrings (Space •••)",
            "author":"by amechra"
          },
          "properties":{
            "practice":" Fraying",
            "primary factor":" Potency",
            "withstand":" Sympathy (Connection)",
            "suggested rote skills":" Occult, Empathy, Politics"
          },
          "description":[
            "This nasty little spell was designed by a Mastigos Banisher - it's designed to hurt, not kill. Broken Heartstrings reduces the Sympathetic Strength of the link by one step for each dot of Potency; reducing it to 0 suppresses the link for the Duration of the spell. This spell cannot affect Connected links."
          ]
        },
        {
          "id":252,
          "identity":{
            "name":"Define Unity (Space •••)",
            "author":"by Nepher"
          },
          "properties":{
            "practice":" Perfecting/Fraying",
            "primary factor":" Duration",
            "suggested rote skills":" Craft, Science, Socialize"
          },
          "description":[
            "Which is two can be made one. This spell takes two or more targets (determined by Scale) in contact, and ties them magically together with a Strength equal to the spell's Potency, for the spell Duration. If the bond is broken, the mage must recast Define Unity to create a new bond.",
            "In the reverse, the spell can loosen a bond between two targets (which may be by ropes, electromagnets, glue, screws...), reducing the Strength of the connection by the spell's Potency. Once the bond is broken, new bonds are treated normally."
          ],
          "others":[
            {
              "+1 Reach":" If the bond created by this spell is broken, it reasserts itself when the targets are in contact again during the spell Duration."
            },
            {
              "+1 Reach":" Once the frayed bond is broken, if another bond, whatever its nature, is put in place between the targets during the spell Duration, it's also reduced."
            }
          ]
        },
        {
          "id":253,
          "identity":{
            "name":"Interpose (Space •••)",
            "author":"by Arduras"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" ?"
          },
          "description":[
            "Take damage in place of another at the caster's choice a number of times up to Potency while the spell lasts by manipulating space between the 'supposed point of impact' and the subject. This only works for melee and ranged combat. Spells cast for direct damage can't have their wounds redirected."
          ],
          "others":[
            {
              "+1 Reach and Prime  ••• ":" You can redirect damage spells."
            },
            {
              "+2 Reach":" cast this spell reflexively."
            }
          ]
        },
        {
          "id":254,
          "identity":{
            "name":"Lock Portal (Space •••)",
            "author":"by MercSet"
          },
          "properties":{
            "practice":" Fraying",
            "primary factor":" Duration",
            "suggested rote skills":" Survival, Crafts, Subterfuge"
          },
          "description":[
            "Where a mundane portal or an Iris is already established, this spell makes passage through it impossible for the Duration. Doors lock, passcodes fail, trails end. Archways and otherwise open portals 'brick up' the space : material around the space fills in the area."
          ],
          "others":[
            {
              "+1 Reach":" The sympathy connections of the portal are likewise suppressed. People conveniently forget the passageway in favor of other means, or know the area beyond but can't remember how to get there."
            }
          ]
        },
        {
          "id":255,
          "identity":{
            "name":"Principle of Contagion (Space •••)",
            "author":"by Five Eyes"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "withstand":" Connection"
          },
          "description":[
            "The mage spins a web of occult connections around themselves or another mage, which incorporates itself into a spell they release. As that magic unfolds, it leaps from target to target, following along the threads of sympathy. The subject must be a mage, who may adopt the web's symbolism into their Imago and expend one Mana during casting to make one spell 'contagious.' A contagious spell affects the original target as usual, but may also spread beyond them. When the target meaningfully interacts with a sympathetic link, the contagious spell will attempt to affect that individual. The contagious spell continues to affect new targets until it ends, it reaches the limit of its Scale factor, or until the Duration of the web elapses, whichever comes first.",
            "The Potency of this spell determines how remote a sympathetic connection the contagion may use to affect other targets. Secondary targets are not themselves contagious."
          ],
          "others":[
            {
              "+1 Reach":" Up to one spell per level of Potency cast by the subject may be rendered contagious."
            },
            {
              "+1 Reach":" Targets beyond the first are contagious. The chain of contagion can be up to (Potency) steps beyond the initial target (so a Potency 3 contagious spell might affect the target, their spouse, their spouse's co-worker, and the co-worker's dogs.) This does not change the Scale limit on total targets."
            },
            {
              "+1 Reach":" The mage may specify a general category of sympathetic connections, such as 'family members' or 'co-conspirators'. Contagious spells will only be transferred across that variety of connection."
            },
            {
              "+1 Reach and Fate •":" The mage may specify something that must occur during interaction to cause contagion, such as discussing a forbidden subject, or which will prevent it, such as performing a warding gesture or wearing a certain color."
            },
            {
              "Add Fate ••":" The original target is exempted from the effects of the contagious spell; they are merely a carrier for it."
            }
          ]
        },
        {
          "id":256,
          "identity":{
            "name":"Surveillance Station (Space •••)",
            "author":"by projectmoon"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Computers, Occult, Subterfuge"
          },
          "description":[
            "The mage weaves disparate locations together so that they may watch over all of them simultaneously. The mage can link together one location per Potency of the spell, and any locations outside of sensory range require the use of a sympathetic Yantra. The resulting scrying window allows the mage to perceive with perfect clarity what is happening at every location simultaneously, although an action may only affect a single place at once. For example, the mage cannot use one action to remotely cast a spell at targets in multiple locations through the window.",
            "Additionally, as long as they observe the scrying window, the mage is immediately aware of any person in the surveilled locations starting to act against that location's intended purpose. For example, the mage will immediately become aware of someone attempting to rob a bank as soon as they start their heist (although not before)."
          ],
          "others":[
            {
              "Add Mind ••":" The mage becomes aware of the intentions of people in the observed areas, if those intentions are not in line with the location's intended purpose. The mage becomes aware of the intentions a number of turns equal to Potency before the action would be committed, if possible. Quick, impulsive decisions may leave less time for the mage to react."
            },
            {
              "+1 Reach":" The mage instills a strong sense of 'being watched' at the observed locations. People in the affected locations must spend a point of Willpower to obviously act against the intended purpose of the location. For example, the bank robber would have to spend Willpower to overcome his nervousness to start the heist."
            },
            {
              "+ 1 Reach":" The mage is alerted if anything out of the ordinary happens at one of the locations under surveillance, even if they are not observing the scrying window. This does not tell the mage what happened, just that something did happen. By adding Fate • when casting the spell, the mage also learns the exact nature of the event."
            }
          ]
        },
        {
          "id":257,
          "identity":{
            "name":"Swallow Cutting (Space •••)",
            "author":"by backtoback"
          },
          "properties":{
            "practice":" Fraying",
            "primary factor":" Potency",
            "suggested rote skills":" Weaponry, Subterfuge, Brawl"
          },
          "description":[
            "By making the subject's attacks come from multiple angles, the enemy finds it harder to defend and attack. For the Duration of the spell, any attacks made by the subject inflicts Potency penalty to the opponent's Defense before the attack was made and lasts for a turn, while the subject ignores Potency penalties to her Defense. This can only affect melee attacks."
          ],
          "others":[
            {
              "+1 Reach":" The spell can now affect ranged attacks."
            }
          ]
        },
        {
          "id":258,
          "identity":{
            "name":"Traverse (Space •••)",
            "author":"by Moinen"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" ?"
          },
          "description":[
            "Distance is an Illusion, so is the path between two points. Designate starting and ending points of which both must be inside of the area affected by spell. If cast on a bended ‘road’ (Area encompassing a few corners) it straightens it in such a way that its ends ‘see’ each other. Everything around the road twists to accommodate the new shape, but the effect can be seen only from the ‘road’."
          ],
          "others":[
            {
              "+1 Reach":" Choose only one direction from which the road straightens, the other one is unaffected. You can e.g. observe and shoot at your foes without cover penalties, they can’t see you back."
            },
            {
              "+1 Reach":" Key the road to determine the condition at which the new shape can be seen. E.g. looking with one eye closed."
            },
            {
              "+1 Reach":" If the road is straight, add a number of new bends equal to Potency."
            }
          ]
        },
        {
          "id":259,
          "identity":{
            "name":"Twist Link (Space •••)",
            "author":"by amechra"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "withstand":" Sympathy (Connection)",
            "suggested rote skills":" Empathy, Politics, Subterfuge"
          },
          "description":[
            "Relationships are fragile, weak things - easily twisted and turned and placed on their head. Twist Link allows the mage to redefine the context of a sympathetic link; they could redefine a business rivalry as a childhood friendship, or a pair of lovers as a pair of enemies. The mage only defines the new relationship in general terms - much like creating or destroying a link, this spell doesn't guarantee outcomes or force reactions. This effect is Lasting, but normal interactions can restore the original link context over time. Much like other weaker sympathy-changing magic, Twist Link cannot affect Connected links."
          ],
          "others":[
            {
              "+1 Reach":" Place the Embarrassing Secret Condition on the subjects, regarding the original context of the relationship on the link."
            },
            {
              "+1 Reach":" Place the Swooning condition on the link."
            }
          ]
        },
        {
          "id":260,
          "identity":{
            "name":"Voodoo Doll (Space •••)",
            "author":"by Raikirah ('2e Mage Combat-Thought Experiments')"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "suggested rote skills":" Brawl, Weaponry, Occult/Intimidate?"
          },
          "description":[
            "The Disciple grants themselves or another the ability to harm a target at range as if they were standing next to the victim. While this spell is active, the bearer of the spell may make Weaponry or Brawl attacks on a target within line of sight by expending a point of Mana and damaging a symbolic representation of the target. These attacks ignore Defense, but Armor and Cover apply as if the attack were Ranged and total Cover between the bearer and the target renders the attack ineffective."
          ],
          "others":[
            {
              "+1 Reach":" The bearer of this spell may attack targets at Sympathetic range by spending an additional point of Mana (2 per attack, total). Cover no longer applies penalties, nor does total Cover render the assault ineffective, but the attack is penalized by the degree of Sympathy between the representation and the target. In addition, this use of the spell opens a Sympathetic conduit between the attacker and the victim."
            },
            {
              "+2 Reach and Add Forces ••":" The bearer of the spell may apply non-physical damage to the target of their attacks (such as fire, electricity, sunlight, etc.) by applying the appropriate type of damage to the target's representation."
            }
          ]
        }
      ],
      "adept":[
        {
          "id":261,
          "identity":{
            "name":"Change of Heart (Space ••••)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Potency",
            "withstand":" Connection",
            "suggested rote skills":" Persuasion, Subterfuge, Empathy"
          },
          "description":[
            "Enemies of yesterday may become friends of today, and lovers of today may become the nemesis of tomorrow. This spell changes the emotional context of a sympathetic connection, but not its intensity. Old foes may find common ground to work together as trusted friends for a brief moment, and life-long lovers may tear each other apart before confessing their love again to each other tomorrow. The feelings are mutual for the parties involved, and while they may feel the sudden change they are not compelled to act according to it. Sympathetic connections of Connected strength cannot be affected by this spell."
          ],
          "others":[
            {
              "+1 Reach":" The emotional change occurs slowly so that the subjects may not notice oddities. If the spell expires before the changes fully set in, the emotions revert back instantly."
            },
            {
              "+1 Reach":" The mage may selectively change emotions, leaving one end unchanged or changing both subjects' emotions to new ones."
            },
            {
              "+2 Reach":" The changes become Lasting. However, given enough time old emotions may reassert themselves, or entirely new relationships may emerge."
            }
          ]
        },
        {
          "id":262,
          "identity":{
            "name":"Inhabit Name (Space ••••)",
            "author":"by Caladriu"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" Stamina",
            "suggested rote skills":" Occult, Investigation, Computer"
          },
          "description":[
            "The mage transforms the subject's body and all her personal possessions into an embodiment of her Sympathetic Name. The subject has no physical presence, even in Twilight- she is actually not anywhere in particular. She exists only within her Name, and can only interact with the world by means of spells like Scrying. This is an incredibly disturbing experience for subjects who cannot use remote spellcasting, akin to absolute sensory deprivation.",
            "Prolonged exposure to this spell (more than an hour per dot of the subject’s Composure) may provoke breaking points or adverse Conditions like Shaken or Spooked. This spell cannot be used on subjects that, for whatever reason, lack a Sympathetic Name. If the subject loses her Sympathetic Name while the spell is active, the spell's Duration ends immediately.",
            "The subject retains all her Attributes and Skills, but may not take any Physical actions, including oblations or using yantras that require touch or speech, though she can still cast spells. This usually means that without some means of remote viewing, she may only cast spells on herself, through her Familiar or a soul stone, or on a subject whose Sympathetic Name she concentrates on for one turn. She is immune to attacks or damage, but not supernatural powers that can perceive her, while inhabiting her Sympathetic Name. She can be targeted sympathetically as normal. Mages who wish to remain in their Name for an extended time often use spells like Possession to act in the physical world. When the spell's Duration ends, she returns to the point she disappeared from."
          ],
          "others":[
            {
              "+1 Reach":" By using the Sympathetic Range Attainment tied to a destination, the spell brings the subject back at that destination rather than at the point she left."
            }
          ]
        },
        {
          "id":263,
          "identity":{
            "name":"In Two Places at Once (Space ••••)",
            "author":"by Dark Archon"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Science, Crafts, Subterfuge"
          },
          "description":[
            "Many people are aware of the Banach-Tarski paradox: you can decompose a ball in a certain way into unmeasurable parts and reconstruct two balls from these parts, which are in all ways identical to the original one. This idea inspired you to do the same; however, in your spell these parts are still connected with each other, and every change in one part is causing identical change in another one (any attempts to get rid of this caused Paradox whenever spell Duration ended and two different conditions clashed in one object).",
            "Your spell creates an identical copy of the subject (or object) in the place you want. Those copies are, in a way, one object - destruction of one will correspond with destruction of another, and so on. Because of that, copy is absolute for all means and purposes. When Duration of the spell ends, the created copy disappears. You can create a copy of a living being, but because you aren't creating two different minds to control two bodies, this leads only to confusion of this being (unless it can multitask naturally or with Mind spell). As with inanimate objects, any change in one 'copy' leads to similar change in another one. With addition of Time you can delay these changes in another copy until the end of spell."
          ]
        },
        {
          "id":264,
          "identity":{
            "name":"Phasing (Space ••••)",
            "author":"by Dark Archon"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Science, Brawl, Stealth"
          },
          "description":[
            "You are here; but at the same time, you aren't. By carefully manipulating the space your body occupies, you are protected against all physical attacks - they just pass through your body. People are still able to see, hear and smell you; mental and magical attacks work as normal. Liquids and gasses don't affect you, but you are still able to be blinded, deafened and so on."
          ],
          "others":[
            {
              "+1 Reach":" By passing the light through the body to the other side, you are invisible as well."
            },
            {
              "+1 Reach":" You can manipulate objects, carry items and physically attack your enemies."
            },
            {
              "+1 Reach":" Aimed spells won't work on you - enemy needs to attack your Pattern directly to harm you."
            }
          ]
        },
        {
          "id":265,
          "identity":{
            "name":"Stolen Face (Space ••••)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" Composure",
            "suggested rote skills":" Subterfuge, Stealth, Occult"
          },
          "description":[
            "The mage steals someone's place in the world by stealing his social connections to the world. For the spell's Duration, the mage's sympathetic connections become identical to that of the spell's subject, while her own ones are concealed and suppressed. Additionally, everyone who interacts with the mage finds themselves placing her in the same emotional context as the subject. While people do realize that the mage and the subject are indeed different persons, they can't help but feel the same way towards both of them. If the Scale factor is increased, the mage can steal the social identities of multiple people. Connected sympathies cannot be stolen by this spell, and magically strengthened sympathies trigger a Clash of Wills. Supernatural methods of discerning true identities or observing sympathetic connections also trigger a Clash of Wills."
          ],
          "others":[
            {
              "+1 Reach":" The subject's sympathetic connections are concealed and suppressed for the spell's Duration."
            },
            {
              "+1 Reach":" The mage can now 'benefit' another person, as long as that person is also included in the spell's Targets."
            },
            {
              "+1 Reach":" The mage can copy even Connected sympathies she is aware of by spending one point of Mana per each."
            },
            {
              "Add Life •••":" The mage's physical appearance is also transformed to become identical to the subject's.This includes any biological identifiers, such as blood type, fingerprints, genes, the corneas and such."
            },
            {
              "Add Mind ••":" While interacting with the mage, people 'remember' hazy memories that justify why they would feel what they feel now. These fake memories dissipate shortly after the mage, leaving only dream-like recollections that are forgotten later."
            },
            {
              "Add Prime ••":" If the spell's subject is another mage, the spell also copies his Nimbus."
            },
            {
              "Add Time ••":" The mage steals the past identity of the subject. While this is usually limited to the subject's Unchanged past, the Temporal Sympathy Attainment allows access to further pasts."
            }
          ]
        },
        {
          "id":266,
          "identity":{
            "name":"Stuck on You (Space ••••)",
            "author":"by Fortunatus"
          },
          "properties":{
            "practice":" Patterning ",
            "primary factor":" Duration ",
            "withstand":" Resolve",
            "suggested rote skills":" Occult, Persuasion, Subterfuge"
          },
          "description":[
            "This spell requires at least two subjects who have some sympathetic connection to each other. This connection becomes a kind of tether--albeit an intangible and imperceptible one--making it impossible for the subjects to move any further from each other than they were at the time of the casting. Any attempt to move beyond that distance by either party turns into a tug-of-war, with the winner pulling the loser along as she goes."
          ],
          "others":[
            {
              "+1 Reach":" The tether grows shorter if the subjects move toward each other."
            }
          ]
        },
        {
          "id":267,
          "identity":{
            "name":"Suspension (Space ••••)",
            "author":"by Falcon777"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" Resolve",
            "suggested rote skills":" Occult, Science, Intimidation"
          },
          "description":[
            "The caster alters the fabric of space around his subject such that it is static. This prevents the subject from moving, though internal systems caught within the spell are not affected (blood and electricity still flow, engines still run, light still shines, air still moves so a living subject isn't asphyxiated). While this spell does not prevent spellcasting, it does prevent the motion necessary to make the mudras for rote spells."
          ],
          "others":[
            {
              "+1 Reach":" Create a key that bypassses the effect."
            },
            {
              "Add •• in Mind, Death, or Spirit":" Affect the appropriate twilight phase."
            },
            {
              "Add •• Forces or Matter":" Prevent motion of subjects under their purview (light stops, air doesn't move, electricity doesn't flow, etc)."
            }
          ]
        },
        {
          "id":268,
          "identity":{
            "name":"Till Death Do Us Part (Space ••••)",
            "author":"by 21C Hermit"
          },
          "properties":{
            "practice":" Unraveling",
            "primary factor":" Potency",
            "suggested rote skills":" Empathy, Intimidation, Weaponry"
          },
          "description":[
            "While some say our attachments shackle us, the more twisted warlocks can turn them into razor wires. This spell inflicts lethal damage equal to the strength of the sympathetic Connection between the mage and the victim. Magically altered sympathies do count, with spells like 'Web-Weaver' increasing damage and 'Borrow Threads' allowing the mage to attack with sympathies that are not her own. Magic that reduces sympathetic strength merely decreases the damage, but magic that conceals sympathies provokes a Clash of Wills."
          ],
          "others":[
            {
              "+1 Reach":" With every attack, the sympathetic connection used is weakened by one step. The spell becomes Withstood by Connection strength, and it cannot weaken Connected sympathies."
            },
            {
              "+1 Reach and 1 Mana":" For a point of Mana, the spell inflicts aggravated damage instead."
            }
          ]
        }
      ]
    }
  },
  {
    "spirit":{
      "initiate":[
        {
          "id":269,
          "identity":{
            "name":"Know the Half-Wolf (Spirit •)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Potency",
            "suggested rote skills":" Occult, Athletics, Socialize"
          },
          "description":[
            "This spell allows the mage to determine what purely Spiritual Tells and Auspice/Tribal Merits the subject Wolf-Blooded character possesses. It conveys the name of all Tells and appropriate Merits the subject possesses, as well as giving a general idea of how each functions."
          ],
          "others":[
            {
              "+1 Reach":" The spell conveys the mechanical specifics of a number of Tells or Merits equal to Potency, not just general functions."
            },
            {
              "+1 Reach":" The spell also reveals the subject’s Tension rating."
            },
            {
              "Add Life •":" This spell can reveal information about any Tell the subject possesses, instead of only Spiritual ones."
            }
          ]
        },
        {
          "id":270,
          "identity":{
            "name":"Protect the Balance (Spirit •)",
            "author":"by BeyondTheGrave "
          },
          "properties":{
            "practice":" Unveiling",
            "primary factor":" Duration",
            "suggested rote skills":" Occult, Science, Animal Ken"
          },
          "description":[
            "With this spell, the user can see the interaction between flesh and Shadow and thereby the natural order of things, or at least what is natural for a given locale, and anything that would disturb it.",
            "This allows the subject to see the Resonance of an area, and so figure out what spirits would be attracted to it.",
            "The subject can now tell which Choirs are the most Dominant in the area."
          ],
          "others":[
            {
              "+1 Reach":" The subject’s ability to sense Resonance is enhanced. The subject can now detect which Descants are the most Dominant in the area."
            },
            {
              "+1 Reach":" The subject’s senses are now particularly attuned to the Resonance of human sin. This allows the subject to know if any Immundi inhabit the area."
            }
          ]
        },
        {
          "id":271,
          "identity":{
            "name":"Read Imprint (Spirit •)",
            "author":"by Flinty"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Potency",
            "suggested rote skills":" Investigation, Occult, Empathy"
          },
          "description":[
            "The Shadow is a reflection of the phenomenal world, built from Essence strongly colored in its Resonance by human action and emotion. A savvy shaman can use this fact to learn of the origin of strong Resonance, calling upon supernal knowledge to recreate the events leading to the formation of the Resonance in question. Performing this spell on a resonant area, object or person will reveal a number of events that reinforced or created the Resonance equal to the Potency of the spell. As the spell draws upon the warped perspective of the Shadow, this knowledge often needs further interpretation."
          ],
          "others":[
            {
              "+1 Reach":" If the Essence spawned from the source produces a Spirit which since then has become active, the mages becomes aware of this fact."
            },
            {
              "+2 Reach":" If a Spirit was spawned the mage may, in place of the normal effect, substitute the effects of the spell 'Know Spirit' (withstood by the newly created Spirits rank as normal). Treat the spell as if it was cast on the Spirit at the moment it became active, even if the Spirit has since then changed."
            }
          ]
        },
        {
          "id":272,
          "identity":{
            "name":"Sense Spirits (Spirit •)",
            "author":"by Dark Archon"
          },
          "properties":{
            "practice":" Knowing",
            "primary factor":" Duration",
            "suggested rote skill":" ?"
          },
          "description":[
            "Denizens of the Shadow aren't bound by physical obstacles, and naturally can't be seen or felt by human senses. This spell tells the mage, if some spirit enters the area of spell and gives the location of it."
          ],
          "others":[
            {
              "+1 Reach":" The mage knows the Rank and Influence of spirit who is entering the area."
            },
            {
              "+1 Reach":" The mage knows the amount of dots in attributes of the spirit who is entering the area."
            }
          ]
        },
        {
          "id":273,
          "identity":{
            "name":"The Translucent Barrier (Spirit •)",
            "author":"by Neros"
          },
          "properties":{
            "practice":" Unveiling",
            "primary factor":" Duration",
            "withstand":" Gauntlet Strength",
            "suggested rote skills":" Occult, Survival, Streetwise"
          },
          "description":[
            "Looking across the Gauntlet is a key ability in every Shaman’s life. This spell allows the subject to perceive what is on the other side of the Gauntlet without having to cross it. All of the subject's senses, except for touch, is cast to the other side so the subject will be unaware of things around its body. The subject cannot interact with the spirit world with spell, only observe."
          ],
          "others":[
            {
              "+1 Reach":" The subject's senses are split and it can perceive both the Shadow and the material realm at the same time with no ill effect."
            }
          ]
        }
      ],
      "apprentice":[
        {
          "id":274,
          "identity":{
            "name":"Hiding Ban and Bane (Spirit ••)",
            "author":"by arthexis"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Potency",
            "withstand":" Rank",
            "suggested rote skills":" Subterfuge, Occult, Survival"
          },
          "description":[
            "Another tool that a Mage can use when negotiating with Spirits is to offer protection of their secrets from their enemies. The mage hides the mystical ban, banes, influences or Numina of the subject amongst other information. The spell obscures up to one piece of information per Potency. This doesn't actually do anything to remove or mitigate their effects. Any attempt to discern those qualities either through mundane research is reduced to a chance die. Supernatural powers that may uncover the information cause a clash of wills."
          ],
          "others":[
            {
              "+1 Reach":" The mage can provide false results for each piece of information hidden by the spell. If the mage wins the Clash of Wills or the mundane research rolls fail, the false information is provided instead of the truth."
            }
          ]
        }
      ],
      "disciple":[
        {
          "id":275,
          "identity":{
            "name":"Anima (Spirit •••)",
            "author":"by BeyondTheGrave"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "suggested rote skills":" Survival, Empathy, Expression"
          },
          "description":[
            "There is a symbiotic relationship between the Shadow and Material world, for example, if there is a Barren in the Shadow then on the physical side plants will wither and people will feel passionless and apathetic.",
            "With this spell the mage improves the beneficial effects of this relationship for the subject. Plants and animals will have improved health and people will feel more alive and creative. If the subject is human, and already has one dot in Expression, then increase Expression by Potency."
          ],
          "others":[
            {
              "+1 Reach and 1 Mana":" The mage may raise Expression above the maximum rating for the subject."
            },
            {
              "+1 Reach":" If the other side of the Gauntlet is a Barren then this spell will negate any penalties to spiritual powers that it would normally generate for the subject."
            }
          ]
        },
        {
          "id":276,
          "identity":{
            "name":"Bind in Flesh (Spirit •••)",
            "author":"by amechra"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Duration",
            "withstand":" Rank",
            "suggested rote skills":" Expression, Occult, Survival"
          },
          "description":[
            "This spell tears a spirit out of Twilight and into the material world. For the Duration of the spell, the spirit is modified as follows:",
            "- The spirit is naturally material, and cannot enter Twilight or the Shadow.",
            "- The spirit can scour its Pattern as if it were a Mage with Gnosis equal to twice its Rank - it cannot naturally recover Essence through other means.",
            "- The spirit gains the benefit of Spirit Armor as if it had a number of dots in Spirit equal to its Rank.",
            "- The spirit loses Essence at twice the normal rate.",
            "If the spirit is forced to return to Twilight or the Shadow, this spell immediately ends. There is a related version of this spell under the Death Arcana, which targets ghosts instead of spirits."
          ],
          "others":[
            {
              "+1 Reach":" The spirit generates appropriate Resonant conditions as if it were a natural denizen of the material. This is usually sufficient to prevent them from suffering the accelerated Essence bleed due to being outside of a Resonant area."
            },
            {
              "Add Life •••":" The spirit's body is reconfigured to work like a living creature - it no longer downgrades damage (due to having organs now, however strange they might happen to be). As some Mages have discovered, this also renders the spirit fertile - a spirit bound to flesh in this way can mate with any creature related to its Influences, creating strange half-spirit hybrids."
            }
          ]
        },
        {
          "id":277,
          "identity":{
            "name":"Degrade Spirit (Spirit •••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Fraying",
            "primary factor":" Potency",
            "withstand":" Rank",
            "suggested rote skills":" Occult, Survival, Intimidation"
          },
          "description":[
            "Just as a Disciple of Spirit can bolster the power of a native to the Shadow, so too can they weaken it. Each level of Potency inflicts a point of bashing damage to the subject Spirit."
          ],
          "others":[
            {
              "+1 Reach":" In lieu of dealing damage, the mage may expend one Potency to decrease one of the spirit’s Attributes by 1 for the Duration of the spell, to a minimum of one dot in each Attribute."
            },
            {
              "+2 Reach":" The mage may spend one Mana to decrease the spirit’s Rank by 1, decreasing its maximum Attribute levels and Essence pool, as well as stripping it of at least one Numen, one level of Influence, and one Manifestation effect."
            }
          ]
        },
        {
          "id":278,
          "identity":{
            "name":"Hungry Flame (Spirit •••, Forces •••)",
            "author":"by Five Eyes"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Potency",
            "cost":" 1 Mana",
            "withstand":" Gauntlet Strength",
            "suggested rote skills":" Science, Survival, Animal Ken"
          },
          "description":[
            "The mage renders the substance of a flame fluid and mobile and stokes the awareness and power of the slumbering mote within. This spell must be performed in an area Resonant to flames or burning; one sufficient for such a mote to have formed. Once enacted, it temporarily elevates the mote into a Rank 1 spirit and invests it into a body of flames for the Duration of the spell. Divide the spell's Potency to provide the spirit with its Attribute dots (subject to the normal maximums.) Its fiery body effectively exhibits the Fire Elemental Dread Power (WtF, p.210), but it has no other Influences, Manifestations, or Numina. It is not bound to obey the mage and will instead pursue its natural inclination - to create as large a fire as possible and feed on the resulting flow of essence.",
            "The Potency of this spell limits how large a fiery 'body' the spirit may be invested into (as per Transform Energy), provided one is available. Flames outside of the spirit's control act normally."
          ],
          "others":[
            {
              "+1 Reach":" The mage can 'steer' the spirit's path, providing a one-or-two-word suggestion for what the spirit might burn first - 'those men' or 'that building'. Once this mission has been accomplished or becomes impractical or impossible, the spirit carries on as it sees fit."
            },
            {
              "+1 Reach":" The spell can enhance the ferocity of the flames the spirit is invested into. Levels of Potency can be spent (at a one-to-one rate) increasing the heat or size of the fire instead of providing Attribute dots to the spirit. When the spell ends the fire returns to its normal form."
            },
            {
              "Death ••• instead of Spirit":" By replacing Spirit with Death, a mage can invest the flame with a Ghost associated with an arson or death by burning into the fire; it will generally seek to burn things or people linked to the event that created the deathly imprint in the first place, or to re-enact that moment."
            }
          ]
        },
        {
          "id":279,
          "identity":{
            "name":"Vent Essence (Spirit •••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "withstand":" Rank or Resolve",
            "suggested rote skills":" Occult, Survival, Intimidation"
          },
          "description":[
            "Sometimes it isn’t enough to move Essence from one vessel to another - sometimes it must be released back into the Shadow, or even the physical world, by force. This spell forces a Spirit or another container for Essence (such as werewolves, or Mages holding Essence in their patterns) to release that Essence back into the world, where it can be reabsorbed normally. The amount of Essence forced from the subject’s Pattern is equal to the Potency of this spell, though its rate of release is limited by the normal expenditure limits of the subject."
          ],
          "others":[
            {
              "+1 Reach":" The caster may force the subject to bypass their normal limits for Essence expenditure, forcing out an amount of Essence equal to Potency instantly. For each point of Essence expelled above the subject’s normal expenditure limit, the subject suffers one point of lethal damage."
            }
          ]
        },
        {
          "id":280,
          "identity":{
            "name":"Avatar (Spirit ••••, Life ••••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Occult, Empathy, Expression"
          },
          "description":[
            "With this spell, a mage can transform a living being into an entity only one step removed from a Spirit. The effect of this transformation is dependent on whether or not the subject possesses Honorary Rank. While in this form, entities capable of detecting or identifying Spirits (including Spirits themselves) will register the subject as being like a Spirit, but different.",
            "For a subject without Honorary Rank, they become an Ephemeral Entity with attribute ratings equal to their lowest attribute in each category (Power, Finesse, Resistance). These ratings determine the Rank of the resultant entity.",
            "For a subject with Honorary Rank, they become an Ephemeral Entity with attribute ratings equal to their lowest attribute in each category (Power, Finesse, Resistance), however their Rank is equivalent to their Honorary Rank. They receive a number of additional Attribute Dots to be distributed by the caster equal to the difference between their current total attributes and the minimum for their new Rank.",
            "In either case, they receive a number of Manifestations and Influences as well as the minimum number of Numina, as appropriate to Rank, assigned by the caster. The subject gains an Essence pool appropriate to Rank, though this pool begins empty, and also gains a Ban & a Bane determined by the Storyteller. Subjects must also contend with powerful, alien instincts in the Spirit form. When confronted by circumstances that would trigger a strong instinctive response, such as an opportunity to create or feed on Resonant Essence, she must roll Resistance reflexively to avoid acting on these impulses. Failure means that she gives in to the alien urges until they’re satisfied. Mages add Gnosis to this roll, and other supernatural beings add their own Tolerance Traits.",
            "Potency may be assigned to increase attributes on a 1:1 basis, or to grant additional Numina, though attributes may not be raised above the individual or total cap for the subject’s new Rank, nor may they be granted more Numina than the maximum for a Spirit of their Rank.",
            "While under the effect of this spell, the subjects may be targeted by any effect that can normally target Spirits, with the exception of Spirit magic, which requires the Life Arcanum added to the casting at an equal level. The subject follows other rules for Ephemeral beings for the Duration, including Discorporation when full of lethal or aggravated damage.",
            "The subject retains any supernatural abilities they possess, and all of their skills. They may use the higher of their native Supernatural Tolerance or their Rank to determine Supernatural Tolerance in this form. Abilities granted by this form use Rank + Influence in Clash of Wills, while other abilities Clash with their usual Clash of Wills dice pool."
          ],
          "others":[
            {
              "+1 Reach":" The subject’s new attributes are determined by the highest attribute they possess in each category, instead of the lowest."
            },
            {
              "+1 Reach":" The subject retains full control of her reason and doesn’t have to fight instinctive urges."
            },
            {
              "+1 Reach and 1 Mana":" For a point of Mana, attributes may be raised above their individual cap, but not above the total cap for the subject’s new Rank."
            },
            {
              "Substitute Mind ••••":" The subject’s new form is similar to a Goetia instead of a Spirit. Subjects with Honorary Rank no longer benefit from it when determining the capabilities of the new form, unless that rank also applies to Goetia."
            },
            {
              "Substitute Death ••••":" The subject’s new form is similar to a Ghost instead of a Spirit. Subjects with Honorary Rank no longer benefit from it when determining the capabilities of the new form, unless that rank also applies to Ghosts."
            },
            {
              "Add Prime ••••":" The subject may access Angelic Incepts and Numina. When using Angelic Numina, or any ability enhanced by an Incept, any rolled failures are considered Dramatic Failures and apply the Hunted Condition to the subject. Rolled exceptional successes apply the Surveilled Condition to the subject, but otherwise function normally. For the purposes of the Surveilled Condition, consider the subject to have Cover equal to 5 – Rank."
            }
          ]
        },
        {
          "id":281,
          "identity":{
            "name":"Infernal Summons (Spirit ••••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Occult, Expression, Persuasion"
          },
          "description":[
            "Those few mages that traffic with the infernal and live to tell the tale frequently develop methods to shortcut the usual summoning process. With this spell, the mage can alter a number of Spirit Manifestation Conditions on a subject, tagging them to an Immundi instead. This frequently provokes a Clash of Wills between the caster and the Spirit that created the initial Conditions. The caster can shift the Resonance in a general manner, causing the likely appearance of a single non-specific demon, or, if she knows the summoning ritual required for a specific demon, she may alter the Manifestation Conditions to exactly reflect those that would be created by performing the ritual. This spell shifts a single Manifestation Condition per point of Potency. This does not force the appearance of an Immundi, but - especially in the cases of a specific summoning - demons rarely forego an opportunity to enter the world of flesh."
          ],
          "others":[
            {
              "+1 Reach":" Any demon that manifests using the manipulated Conditions must succeed on a Clash of Wills to make any direct attempt to harm the caster, or any other subject included in the Scale factor of the spell."
            },
            {
              "Note":" the usual -5 for using Awakened Magic to summon Infernal entities still applies to this."
            }
          ]
        },
        {
          "id":282,
          "identity":{
            "name":"Live the Other Side (Life ••••, Spirit ••••)",
            "author":"by Neros"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" Resolve/Rank",
            "suggested rote skills":" Medicine, Athletics, Intimidation"
          },
          "description":[
            "This Spell allows turning a living subject into a Rank 1 Spirit following all the rules of beings of the Shadow: Essence Bleed in the material world, use of Essence for sustenance, needs payment for its help, etc. Conversely, it may turn a Spirit into a mortal, giving it a human body.",
            "Living Beings transmuted into Spirits:",
            "- ​Power: Highest of Intelligence, Strength or Presence;",
            "- Finesse: Highest of Wits, Dexterity or Manipulation;",
            "- Resistance: Highest of Resolve, Stamina or Composure;",
            "- Influence: The target gains one Influence chosen by the mage;",
            "- Numina: The target gains one Numina chosen by the mage;",
            "- Manifestations: The target gains the Twilight Form Manifestation along with one more Manifestation chosen by the mage.",
            "- Ban & Bane: The Ban and Bane of the subject becomes something appropriate to their personality, wants and fears.",
            "- Skills: Living beings lose their skills and use Power + Finesse instead. If the action they are taking doesn’t match with their 'spirit type', the ST may add penalties.",
            "- Resonant Essence for the subject is dependent on its nature. A human subject is Resonant with humans and mages are Resonant with magic (ST’s discretion).",
            "- A mage that transforms into a spirit loses access to his magic for the Duration of the spell.",
            "Spirits transmuted into humans:",
            "- Attributes: Divide the spirit's Power, Finesse and Resistance among the appropriate Attributes (See above), adding to those that would fit the spirit's nature.",
            "- Skills: The spirit gains skills fitting to its nature, where those that suit it most are around 3 or more dots.",
            "- If a spirit is killed while being 'alive', they simply turn back into a spirit when the spell ends."
          ],
          "others":[
            {
              "+1 Reach":" The subject gains one additional Numina/Potency."
            },
            {
              "+1 Reach":" The subject gains one additional Influence."
            },
            {
              "+2 Reach and 1 Mana":" The Mage may turn the subject into a Rank 2 spirit and the target adds the Spell’s Potency as a bonus to Power, Finesse and Resistance. The target also gains an additional dot of Influence."
            },
            {
              "Add Prime ●●●":" if the mage is a subject, she will still have access to her Arcana’s, however, she is unable to spend Mana."
            }
          ]
        },
        {
          "id":283,
          "identity":{
            "name":"Mother Wolf’s Blessing (Spirit ••••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Potency",
            "cost":" 1 Mana",
            "suggested rote skills":" Medicine, Survival, Empathy"
          },
          "description":[
            "With this spell, the caster can bestow one of The People with a great gift - infusing their Essence with purity and potency, greatly aiding their regeneration. By doing so, she upgrades the type of wound the werewolf can heal by spending Essence by one level - if he can normally regenerate two points of lethal damage in a turn by spending Essence, he may instead regenerate two aggravated damage per turn. Each point of Potency enhances one point of Essence (allowing one turn of enhanced regeneration), and the subject may not choose when to use this effect - it is automatically activated any time the subject spends Essence to regenerate, until the spell’s Duration runs out, or the full Potency is expended. If the subject has no aggravated damage, any lethal damage is regenerated normally, though this still ‘expends’ a point of Potency."
          ],
          "others":[
            {
              "Add Life ••••":" This also enhances the natural regeneration of the subject, causing his per-turn healing rate to heal lethal damage, instead of just bashing. Bashing damage still regenerates first, however."
            }
          ]
        },
        {
          "id":284,
          "identity":{
            "name":"Safety Between (Spirit ••••)",
            "author":"by Neros"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" Gauntlet Strength",
            "suggested rote skills":" Science, Larceny, Empathy"
          },
          "description":[
            "The subject becomes wrapped into the very fabric of the Gauntlet, existing neither in the material world nor the Shadow. When inside the Gauntlet, the subject is kept in stasis until the spell ends. This means the subject cannot take any actions or be further affected by Conditions or Tilts it is currently suffering from.",
            "When the spell ends or the mage wishes to dispel it as usual, the subject reappears where they entered the Gauntlet. If a large object is in the way when they reappear, the subject will end up Knocked Down at the object's closest edge from the exit point."
          ],
          "others":[
            {
              "+1 Reach":" the mage can choose that the subject doesn’t have to reappear on the side it entered."
            },
            {
              "+2 Reach":" the subject can take mental actions like thinking and casting spells. These spells however will first take effect when the subject leaves the Gauntlet, but Paradoxes can still occur. For 1 Mana, the subject may take physical actions at a -2 penalty and move around at a speed equal to their Gnosis within the Gauntlet. If the subject moves, it will reappear where it has walked to."
            }
          ]
        },
        {
          "id":285,
          "identity":{
            "name":"Spirit Marriage (Spirit  ••••)",
            "author":"by Aristarkos"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" Rank",
            "suggested rote skills":" Politics, Persuasion, Socialize"
          },
          "description":[
            "The mage invites (or forces) a spirit to cohabit her body and bequeath their strength to the mage. For every dot of Potency, the mage can gain one of the following:",
            "- One dot of Influence that the spirit has. The roll to activate the Influence is Gnosis + Spirit and if it costs Essence the mage may opt to use Mana instead. The mage cannot gain more Influence dots than what the spirit has.",
            "- One Numen that the spirit has. The roll to activate the Numen is Gnosis + Spirit and if it costs Essence the mage may opt to use Mana instead. The mage cannot gain more Numen than what the spirit has.",
            "- One of the mage’s Attribute dots may be boosted by the Attribute dots of the spirit on a 1-1 basis. The spirit’s Power dots can boost Intelligence, Strength and Presence. Finesse dots can boost Wits, Dexterity and Manipulation. Resistance dots can boost Resolve, Stamina and Composure. No Attribute can be boosted beyond the allowed maximum of the Mage.",
            "This spell has a slight cosmetic effect as well, depending on what type of spirit is cohabiting the mage’s body. A fire spirit may make the mage smell like smoke and have a slight orange tint to their eyes, while a leech spirit makes the mage much paler than normal. These cosmetic effects are usually more noticeable for higher rank spirits."
          ],
          "others":[
            {
              "+1 Reach":" The cosmetic alteration is ignored, making the mage look just like they did before the spell."
            },
            {
              "+1 Reach":" The mage may boost one Attribute beyond the mage’s natural maximum."
            }
          ]
        },
        {
          "id":286,
          "identity":{
            "name":"Totem (Spirit ••••)",
            "author":"by Inodiv"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" Rank or Composure",
            "suggested rote skills":" Occult, Survival, Expression"
          },
          "description":[
            "The caster forges a Totem bond between a subject Spirit and other subjects of the spell. The Spirit gains the Resonant Condition towards all other subjects of the spell, and its Aspiration serves as the Totem Aspiration for all other subjects. The Spirit is reborn, and then rebuilt according to the rules for constructing a Totem of a werewolf Pack. All non-Spirit subjects gain the Totem merit at a number of dots equal to Potency, though they must qualify for this merit normally."
          ],
          "others":[
            {
              "+1 Reach":" Non-Spirit subjects do not need to meet the prerequisites for the Totem merit, and are granted it at the same level as those that do. This would allow a normal human, or a vampire, to be bound to the subject Spirit in the same manner as a werewolf."
            },
            {
              "Add Mind ••••":" The totem may be a Goetia instead of a Spirit. It is still built using the normal Totem rules to determine its Traits."
            },
            {
              "Add Death ••••":" The totem may be a Ghost instead of a Spirit. It is still built using the normal Totem rules to determine its Traits."
            },
            {
              "Add Prime ••••":" The totem may be an Angel of the God-Machine. It retains its original traits and abilities, though Totem points provide Pack advantages as normal. Its Aspirations are determined by the Mission assigned by its Creator."
            },
            {
              "Add Fate ••••":" The totem may be Fae. It retains its original traits and abilities, though Totem points provide Pack advantages as normal."
            }
          ]
        },
        {
          "id":287,
          "identity":{
            "name":"Vicious Gauntlet (Spirit ••••)",
            "author":"by Arthexis"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "withstand":" Gauntlet’s Strength",
            "suggested rote skills":" Survival, Stealth, Brawl"
          },
          "description":[
            "This spell alters the nature of the gauntlet, adding biting fangs, snarling thorns and vicious claws to its 'surface'. The subject of this spell is the gauntlet itself as it covers the Area affected by the spell. While the alteration lasts, whenever an entity attempts to cross it, roll Gauntlet Strength x 2, resisted by the entity's Stamina (or Resistance if a Spirit or similar entity). Each success causes a point of lethal damage to the crossing entity. Once the gauntlet has performed a number of attacks equal to the spell's Potency, the spell ends."
          ],
          "others":[
            {
              "+1 Reach and 1 Mana":" The gauntlet deals aggravated damage instead of lethal."
            },
            {
              "+1 Reach":" The gauntlet may be altered by the spell in one direction only."
            },
            {
              "+1 Reach":" You may designate a Key that prevents the gauntlet from attacking its holder."
            }
          ]
        }
      ]
    }
  },
  {
    "time":{
      "initiate":[
        {
          "id":288,
          "identity":{
            "name":"Timekeeper (Time •)",
            "author":"by SoulGambit"
          },
          "properties":{
            "practice":" Unveiling",
            "primary factor":" Duration",
            "withstand":" None"
          },
          "description":[
            "By use of this spell, the subject becomes aware of their absolute time, as well as the relative time between events. For instance, they could measure exactly how many seconds it takes for someone to run a lap without the use of a stopwatch. The subject not only detects when time has been sped up or slowed down, but they become aware of how much time 'should' have passed."
          ],
          "others":[
            {
              "+1 Reach":" By measuring the passage of moments, the subject may look upon a project that has been undertaken and know exactly when it’ll be complete. They could tell you exactly how long until a Kettle boils, the exact second a pregnant woman will give birth, or when a cathedral would be completed under present circumstances. Large scale projects that will be completed far in advance will return a likely range. When an Extended Action is evaluated, it returns how long it’ll take to complete on average and how long each interval is."
            }
          ]
        }
      ],
      "apprentice":[
        {
          "id":289,
          "identity":{
            "name":"Dead-Eye (Time ••)",
            "author":"by Enlightened_Milkman"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Duration",
            "withstand":" Resolve",
            "suggested rote skills":" Firearms, Crafts, Intimidation"
          },
          "description":[
            "The mage slows time while aiming their weapon or alternatively speeds it up on someone aiming theirs. For the Duration the next (Potency) of shots gain a dice as though the mage spent a turn aiming. Alternatively, the spell can double the amount of time a target needs to gain an aiming bonus (e.g. two turns instead of one for a +1 bonus). The spell doesn't provide a benefit to auto fire weapons."
          ],
          "others":[
            {
              "+1 Reach":" The spell applies the maximum aim bonus or nullifies the target's aim bonus."
            },
            {
              "+1 Reach and 1 Mana":" The spell works with autofire weapons."
            }
          ]
        },
        {
          "id":290,
          "identity":{
            "name":"Dusty Trails (Time ••)",
            "author":"by SoulGambit"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Potency",
            "withstand":" Composure",
            "suggested rote skills":" Investigation, Stealth, Subterfuge"
          },
          "description":[
            "The subject appears completely distinct from one event in their past per Potency. Any mundane attempt to link them to their occluded past through physical or circumstantial evidence fails, and supernatural attempts to link the subject to their past provokes a Clash of Wills. This spell has no effect on memories. Without the aid of Temporal Sympathy, only events in the unchanged past may be occluded."
          ],
          "others":[
            {
              "+1 Reach":" The subject can not be tracked as their link to their own footsteps fades."
            }
          ]
        },
        {
          "id":291,
          "identity":{
            "name":"Falsify Timeline (Time ••)",
            "author":"by Hardwire99"
          },
          "properties":{
            "practice":" Veiling",
            "primary spell factor":" Duration",
            "suggested rote skills":" Larceny, Occult, Subterfuge"
          },
          "description":[
            "For the Duration of this spell the Mage can falsify the subject’s action within the Timeline. If someone tries to view the subjects past it provokes a Clash of Wills. If they fail the Clash of Wills, the Caster of this spell can send an altered image of events to the onlooker. This does not alter what really happened, just what the onlooker perceives happened.",
            "If the onlooker records this Falsified Timeline, in any fashion, the effects become lasting in that the recorded history remains even after the spell ends."
          ],
          "others":[
            {
              "Add Mind ••":" The Falsified Timeline becomes contagious. The onlooker believes the visions so completely that anyone they communicate the Falsified visions to also believes it."
            },
            {
              "Add Prime ••":" The effects stand up to any form of lie detection, be it mundane or supernatural. "
            }
          ]
        },
        {
          "id":292,
          "identity":{
            "name":"Five O'Clock Shadow (Time ••)",
            "author":"by SoulGambit"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Potency",
            "withstand":" None",
            "suggested rote skills":" Politics, Survival, Subterfuge"
          },
          "description":[
            "This spell allows a Mage to alter the subject's apparent age, or to make them rapidly progress or regress through time: someone could be made to appear older or younger; a seed could become a plant, or a plant could become a seed; a plant could be made to bear fruit or wither away as though it were winter; hair and nails could be lengthened and shortened; a kettle could be made to boil or cool. The changes brought on by this spell are illusionary, and some supernatural powers (including Time Mage Sight) may see through them with a successful Clash of Wills"
          ],
          "others":[
            {
              "+1 Reach":" This spell may cause the subject to detect as being from another time entirely, or to detect as moving faster or slower through time, or any other number of temporal anomalies with a Clash of Wills."
            }
          ]
        },
        {
          "id":293,
          "identity":{
            "name":"Fog of Ages (Time ••)",
            "author":"by SoulGambit"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Potency",
            "withstand":" Resolve",
            "suggested rote skills":" Academics, Larceny, Subterfuge"
          },
          "description":[
            "By means of this spell, an Apprentice of Time can hide the past from the subject. One consecutive Scene per Potency of the spell is obscured, meaning the subject can not remember it or acknowledge the results of it. "
          ],
          "others":[
            {
              "+1 Reach":" The scenes obscured by this spell no longer need to be consecutive. "
            },
            {
              "+1 Reach":" Instead of obscuring entire scenes, this spell can obscure specific events within a scene while leaving the rest of the event unchanged."
            }
          ]
        },
        {
          "id":294,
          "identity":{
            "name":"Lying Clocks (Time ••)",
            "author":"by arthexis"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Potency",
            "withstand":" Composure",
            "suggested rote skills":" Expression, Larceny, Science"
          },
          "description":[
            "This spell twists the subject's sense of time. For the Duration, the subject is unable to notice the passage of time except as intended by the mage and even looking at clocks or other methods to know the time is uneffective. When casting this spell the mage can decide if the subject thinks they have 'a lot of free time', 'really late' or 'just in time' for an event or just as a general feeling."
          ]
        },
        {
          "id":295,
          "identity":{
            "name":"Procrastination (Time ••)",
            "author":"by SoulGambit"
          },
          "properties":{
            "practice":" Shielding",
            "primary factor":" Potency",
            "suggested rote skills":" Occult, Socialize, Survival"
          },
          "description":[
            "Sure, the subject might have just been hit by a truck or eaten by a grue, and yes a Disciple of Time has to deal with the fact that actually happened… but… they’ll get around to it later. This spell protects the subject’s pattern from being changed by what is going on in the present. Up to one Condition, Tilt, or instance of Damage may be suspended per point of Potency. When Damage is suspended, you only suspend a number of health levels equal to Potency. Directly supernatural changes require a Clash of Wills to suspend. When this spell’s Duration wears off, all suspended events affect the subject instantly."
          ],
          "others":[
            {
              "+1 Reach":" Once the spell ends, suspended effects happen at a rate of one per turn."
            }
          ]
        },
        {
          "id":296,
          "identity":{
            "name":"Veil Finality (Time ••)",
            "author":"by projectmoon"
          },
          "properties":{
            "practice":" Veiling",
            "primary factor":" Duration",
            "withstand":" Temporal Sympathy",
            "suggested rote skills":" Politics, Stealth, Subterfuge"
          },
          "description":[
            "The mage creates an illusion of the self that draws from the self's own past. The subject appears to be in the state they were at the specified point in time. The subject's physical appearance and surface mental state appear to be as they were at the given point in time, although actual Attributes and Skills are not masked. This spell cannot hide supernatural attributes, such as the state of the subject's soul or any ongoing magical effects. It also cannot hide transformations like a mage's Awakening or a vampire's Embrace. By default, the spell can only access the subject's Unchanged history, but by adding Temporal Sympathy, the spell can reach into any point in the subject's past. Attempts to supernaturally pierce the illusion trigger a Clash of Wills."
          ],
          "others":[
            {
              "Add Life ••":" The subject's Physical Attributes and Skills are also hidden, appearing to be what they were at the given point in time."
            },
            {
              "Add Mind ••":" The subject's Mental and Social Attributes and Skills are also hidden, appearing to be what they were at the given point in time."
            },
            {
              "+1 Reach":" The spell hides supernatural attributes, such as the state of the subject's Soul or ongoing spells."
            },
            {
              "+1 Reach":" The spell also hides drastic supernatural transformations, such as mage's Awakening or a vampire's Embrace."
            }
          ]
        },
        {
          "id":297,
          "identity":{
            "name":"Your Worst Day (Time ••)",
            "author":"by Caladrium"
          },
          "properties":{
            "practice":" Ruling",
            "primary factor":" Potency",
            "withstand":" Composure",
            "suggested rote skills":" Intimidation, Empathy, Investigation"
          },
          "description":[
            "Good days and bad days are more than just memories, they're inscribed in Time. By pulling tight on the strings of Temporal Sympathy, the mage can conjure the low points and happy moments of the past into the present. The mage can apply a single non-persistent mental Condition that the subject has previously experienced, such as Guilty, Shaken, Swooned, or Inspired. This spell is not powerful enough to apply persistent Conditions such as Broken or Madness, and it can only apply Conditions that the subject experienced within the same day. If the Temporal Sympathy Attainment is incorporated, the spell can apply an older non-persistent Condition, although the mage must have a specific idea of what moment in the subject's timeline they are drawing on."
          ]
        }
      ],
      "disciple":[
        {
          "id":298,
          "identity":{
            "name":"Anime Combat Conversation (Time •••, Mind •)",
            "author":"by Moinen"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "suggested rote skills":" ?"
          },
          "description":[
            "Every Subject of this spell can communicate (say and hear) through elaborate speeches as a reflexive action. Each of these reflexive actions may contain a number of simple sentences equal to potency of the spell."
          ],
          "others":[
            {
              "+1 Reach and 1 Mana":" Subjects of the spell may, instead of speaking sentences, use High Speech Yantra as a reflexive action, even if it is not primary yantra."
            },
            {
              "+2 Reach and 1 Mana":" As above, but the subject may use High Speech Yantra instead of speaking one of the sentences."
            },
            {
              
            }
          ]
        },
        {
          "id":299,
          "identity":{
            "name":"Changing the Clock Face (Time •••)",
            "author":"by SoulGambit"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "withstand":" Composure",
            "suggested rote skills":" Academics, Stealth, Persuasion"
          },
          "description":[
            "This spell allows a mage to cause the subject to rapidly progress or regress through time up to one year per Potency. Unlike Five O'Clock Shadow, these changes are real. However, they produce no mechanical benefit or hindrance, but they may have cosmetic and some narrative impact. For instance, someone made older by this spell would look and feel different, but they would have the same traits and they would live the same length of time after this spell."
          ]
        },
        {
          "id":300,
          "identity":{
            "name":"Feast of Goibnui (Time •••)",
            "author":"by KaiserAfini"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Potency",
            "suggested rote skills":" Crafts, Medicine, Science"
          },
          "description":[
            "Speeding up time for something as complex as a living being is difficult, but doing so to complete a predictable procedure is far easier. This allows any autonomous process on a non-living target to be sped up by up to [Potency] days. Images that would take days to process forensically can be completed instantly, food that must spend hours in an oven can be done in moments, medicine that takes days to synthesize can be made quickly available, etc.",
            "This rote is fairly common for mages with a gastronomic or scientific focus. But it was originally created by the Libertines after the flu plague of 1918, as a way to accelerate research and rapidly stock vaccine banks, especially when faced with any other initiatives of the Raptor's servants."
          ],
          "others":[
            {
              "+1 Reach":" Potency instead speeds up the process by months of time. For another Reach, it instead does so by Potency years, allowing for things like wine and miso to be quickly made. For another Reach, it speeds up the process by any amount of time the mage wishes, but damaging objects requires a different spell."
            }
          ]
        },
        {
          "id":301,
          "identity":{
            "name":"Hasten Symbolism (Time •••)",
            "author":"by espritdecalmar"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Duration",
            "suggested rote skills":" Athletics, Expression, Occult"
          },
          "description":[
            "The mage enhances the target's ability to conceptualize the symbols of magical power, condensing what would take multiple moments into a single, graceful movement. The next time the target casts a spell during this spell's Duration, the target may utilize an additional number of Yantras equal to this spell's Potency in the same reflexive action. This does not affect Yantras that normally require more than a reflexive action to employ (such as High Speech or Runes), nor does it increase the Gnosis-derived number of Yantras the target may access."
          ],
          "others":[
            {
              "+1 Reach":" The target can use the High Speech Yantra as a reflexive action."
            },
            {
              "+1 Reach":" Add this spell's Potency to the target's Gnosis for the purpose of determining how long it takes to draw runes."
            },
            {
              "+1 Reach and +1 Mana":" The target benefits from this spell's effects on a number of spells equal to Potency."
            }
          ]
        },
        {
          "id":302,
          "identity":{
            "name":"Long Day (Time •••)",
            "author":"by SoulGambit"
          },
          "properties":{
            "practice":" Fraying",
            "primary factor":" Potency",
            "withstand":" Stamina",
            "suggested rote skills":" Academics, Socialize, Survival"
          },
          "description":[
            "This spell makes the subject profoundly feel every moment they’ve been awake, even if they’ve just awoken. They gain the Lethargic Condition as though they have been awake for six hours per point of Potency and must make an immediate roll to stay awake. At the ST’s discretion, subjects who don’t feel fatigue may be immune to this spell."
          ],
          "others":[
            {
              "+1 Reach":" The subject takes 1 Bashing Damage per point of Potency which can not be healed so long as the subject has the Lethargic Condition."
            }
          ]
        },
        {
          "id":303,
          "identity":{
            "name":"Lost Time (Time •••)",
            "author":"by SoulGambit"
          },
          "properties":{
            "practice":" Fraying",
            "primary factor":" Potency",
            "withstand":" Composure",
            "suggested rote skills":" Athletics, Academics, Socialize"
          },
          "description":[
            "People get lost in the moment--they are having fun, or hard at work, and suddenly it’s a few hours later and they are left wondering where the time went? This spell allows the Mage to degrade the subject’s ability to change with the progression of time, inflicting the Insensate Tilt. If they were engaged in a reasonably inane task that requires little important decision making (such as reading, playing a game, watching TV, etc) they will continue to do it."
          ],
          "others":[
            {
              "+1 Reach":" The subject becomes unaware of their surroundings for the Duration of the Spell."
            }
          ]
        },
        {
          "id":304,
          "identity":{
            "name":"Sequel (Time •••)",
            "author":"by SoulGambit"
          },
          "properties":{
            "practice":" Weaving",
            "primary factor":" Potency",
            "withstand":" Resolve",
            "suggested rote skills":" Persuasion, Science, Survival"
          },
          "description":[
            "With this spell, a Mage can force someone to relive past trials and victories. The subject gains one mundane Condition or Tilt per dot of the spell’s Potency that they have experienced in the past. The mage can select conditions they know about, or simply seek out conditions that match broad criteria (in which case the subject’s player chooses something appropriate). Without the Temporal Sympathy Attainment, this spell can only cause someone to to be affected by Conditions and Tilts experienced in the Unchanged past."
          ],
          "others":[
            {
              "+1 Reach":" Persistent Conditions may be re-applied by means of this spell."
            },
            {
              "+2 Reach":" You may add a supernatural Condition or Tilt so long as you have another Arcana related to your choice rated at ••• or higher."
            }
          ]
        },
        {
          "id":305,
          "identity":{
            "name":"Time Renews (Time •••)",
            "author":"by SoulGambit"
          },
          "properties":{
            "practice":" Perfecting",
            "primary factor":" Potency",
            "suggested rote skills":" Larceny, Medicine, Socialize"
          },
          "description":[
            "By accelerating the healing process, the Mage may allow for someone to recover from wounds. The subject recovers 2 Bashing per point of Potency so long as they could naturally recover from the injury. "
          ],
          "others":[
            {
              "+1 Reach":" Potency can be spent to recover 1 Lethal instead of 2 Bashing."
            },
            {
              "+1 Reach":" One condition per Potency that fades naturally over time is made to fade instantly. Supernatural Conditions provoke a Clash of Wills."
            },
            {
              "+1 Reach":" This spell reproduces the effects of a full night’s rest, including recovering a point of Willpower if applicable."
            }
          ]
        }
      ],
      "adept":[
        {
          "id":306,
          "identity":{
            "name":"Co-Temperus (Time ••••)",
            "author":"SoulGambit"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Potency",
            "cost":" 1 Mana",
            "suggested rote skills":" Larceny, Politics, Subterfuge"
          },
          "description":[
            "By making the present as indeterminable as the future, this spell can allow the subject to participate in multiple ‘potential presents’ simultaneously. The subject splits into one additional version of themselves per Potency. This is not a true division of the subject, but instead is the subject existing in multiple timelines. They share a single Willpower and Mana pool, but are otherwise treated as separate. At the beginning of the subject’s turn, each version of themselves may perform their actions as normal. However, apply the results of only one version of the subject on the world around them, and each version of the subject completely ignores what the others do (sometimes even occupying the same space).",
            "For instance, if one version of the subject opens a door and goes through it, all other versions of the subject still have to open the door and walk through it. If, at the end of the turn, the subject chooses to apply the changes of another version of themselves who did not open the door on the world, then the door would be closed at the end of the turn (having never been opened). Any supernatural powers that affect one or more versions of the subject affects all of them.",
            "When the spell ends or is canceled, only one version of the subject sticks around, and that version suffers all of the damage, conditions and tilts suffered by all other versions of themselves, but also gains all knowledge and experiences from the discarded versions of themselves."
          ],
          "others":[
            {
              "Add Mind ••":" The different versions of the subject may communicate telepathically."
            },
            {
              "+1 Reach":" The different versions of the subject are more insulated from each other. When one or more of them is affected by a supernatural power, then they may roll a Clash of Wills to keep all other versions from themselves from being equally affected."
            },
            {
              "+1 Reach":" The version of the subject that remains after the spell expires gains the worst damage from all versions of themselves, instead of all of it."
            },
            {
              "+3 Reach":" When the spell expires, any damage, Condition or Tilt from the discarded versions of the subject is not applied to the subject."
            }
          ]
        },
        {
          "id":307,
          "identity":{
            "name":"Encore (Time ••••)",
            "author":"by SoulGambit"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Potency",
            "withstand":" Composure",
            "suggested rote skills":" Athletics, Expression, Science"
          },
          "description":[
            "By means of this spell, a Disciple of Time can cause someone to repeat the actions of the past. Without the Temporal Sympathy attainment, the Disciple of Time chooses one instant action the subject performed in the unchanged past. The subject performs that same action on their next turn. They perform the same motions and thoughts they did, without regards to their surroundings. This makes interacting with a changing world imprecise (i.e. striking an opponent who has moved would cause them to strike at the same spot)."
          ],
          "others":[
            {
              "+1 Reach":" Instead of an instant action, the subject will repeat an entire Scene. This reach may be selected multiple times, causing the subject to repeat more than one scene’s worth of actions."
            },
            {
              "+1 Reach":" The subject will adjust their motions to try and produce the same result as their prior actions. Someone who reads a book will pick up that same book to read if it is handy. Someone who threw a punch would throw a punch at the same target if they are nearby. If the subject can’t achieve the same result with only minor adjustments, they will mime the action normally."
            },
            {
              "+3 Reach":" As above, but the Mage may select new targets for the subject’s actions. The decision for what replaces the old target is made when the spell is cast, and that decision persists for the Duration of the spell."
            }
          ]
        },
        {
          "id":308,
          "identity":{
            "name":"Hung Action (Time ••••)",
            "author":"by SoulGambit"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Duration",
            "suggested rote skills":" Athletics, Medicine, Subterfuge"
          },
          "description":[
            "One mundane instant action performed by the subject while this spell is active becomes 'hung' in time. Resolve the effects of the action then, but instead of performing that action the subject merely passes their turn. When this spell’s Duration ends or it is canceled, the suspended action affects the world. Many mages use the Fate two-dots Attainment ‘Conditional Duration’ on Hung Action, so it releases its action under set circumstances."
          ],
          "others":[
            {
              "Add Fate ••":" Instead of suspending an action entirely, the Mage may suspend only their success. The suspended action appears to happen, yet it looks like a failure (or, at the subject’s option, a dramatic failure--this does not grant a beat). When the spell ends, it turns out the action was a success the entire time."
            },
            {
              "+1 Reach":" The subject may hang one additional mundane action while this spell is active. This Reach may be selected multiple times."
            },
            {
              "+2 Reach":" This spell may apply to Extended Actions as well as Instant Actions."
            }
          ]
        }
      ],
      "master":[
        {
          "id":309,
          "identity":{
            "name":"Duplicate (Time •••••)",
            "author":"by Arduras"
          },
          "properties":{
            "practice":" Making",
            "primary factor":" Duration",
            "suggested rote skills":" ?"
          },
          "description":[
            "For a number of actions equal to potency, create a small temporal warp the span of seconds in which time repeats itself for a subject. Any duplicated action performed by the subject will be doubled as though they had performed the action twice. Any expenditure required by the repeated action must be paid for twice, and any penalties accrued by that action will be inflicted twice."
          ]
        },
        {
          "id":310,
          "identity":{
            "name":"Obliterate (Time •••••)",
            "author":"by Bloodyquill"
          },
          "properties":{
            "practice":" Unmaking",
            "primary factor":" Potency",
            "withstand":" Resolve",
            "suggested rote skills":" Weaponry, Occult or Academics"
          },
          "description":[
            "The spell obliterates a target's thread in the timeline, burning it back. If the spell is successful the target ceases to exist."
          ],
          "others":[
            {
              "+3 Reach":" Not only is the target erased from the timeline, they are removed from the timeline retroactively backwards in time to a point based on the spell’s Duration. Remember that Temporal Sympathy comes into play with this Reach option."
            }
          ]
        },
        {
          "id":311,
          "identity":{
            "name":"Tabula Rasa (Time •••••)",
            "author":"by Jakondite"
          },
          "properties":{
            "practice":" Unmaking",
            "primary factor":" Potency",
            "withstand":" Temporal Sympathy",
            "suggested rote skills":" Occult, Intimidation, Subterfuge"
          },
          "description":[
            "A person is the sum of his whole collective experiences and memories. This spell does not change the past, but removes a target’s connection to their own past by unmaking their unchanged temporal connection. The individual loses touch with who they are - their memories cut off from their mind, they become a blank slate, experiencing full and total amnesia. The effect is Lasting."
          ],
          "others":[
            {
              "+1 Reach":" In addition to removing a target's memories, they may also remove a person’s connections to their skills, making all skills the target had prior to the casting 'untrained'."
            },
            {
              "Add Space •••••":" By adding Space and spending a Reach, the caster of Tabula Rasa can make it so that not only does the target not remember the world, but the world does not remember the target - leaving them a shell of the individual they were with no connections."
            }
          ]
        },
        {
          "id":312,
          "identity":{
            "name":"Time Heals Everything (Time ••••)",
            "author":"by SoulGambit"
          },
          "properties":{
            "practice":" Patterning",
            "primary factor":" Potency",
            "suggested rote skills":" Athletics, Empathy, Medicine"
          },
          "description":[
            "With time and care, even the most grievous wounds can be recovered. So long as the target would eventually recover naturally, this spell advances the target to that point in time. Each Potency of the spell can cause the subject to recover 2 Lethal."
          ],
          "others":[
            {
              "+1 Reach":" One condition per Potency that fades naturally over time is made to fade instantly. Supernatural Conditions provoke a Clash of Wills."
            },
            {
              "+1 Reach":" This spell reproduces the effects of a full night’s rest, including recovering a point of Willpower if applicable."
            },
            {
              "+1 Reach and 1 Mana":" The spell heals aggravated damage. This spell still can not heal wounds the subject wouldn’t heal normally."
            }
          ]
        },
        {
          "id":313,
          "identity":{
            "name":"The World (Time •••••)",
            "author":"by Thorbes"
          },
          "properties":{
            "practice":" Unmaking",
            "primary factor":" Duration",
            "suggested rote skills":" Science, Occult, Drive"
          },
          "description":[
            "This spell creates a time bubble centered on the caster (measured by Scale) where all time ceases to exist. Only she can act and move around, while the rest of the world inside the bubble (which doesn't move with her) stands completely frozen in place. She can move objects and people around as per her usual capabilities and these offer no resistance at all. The only limitation is that she can't alter the patterns in a way that would imply a variation of Structure, Health or Willpower in anyone but herself (so she cannot attack or heal other targets). She could even cross from one building to another as if walking in mid air, as she won't fall unless she wills herself to, and then she would just move downwards at her usual Speed per Turn."
          ],
          "others":[
            {
              "+1 Reach and 1 Mana":" By adding a Reach and paying a Mana the caster can actually attack or heal others inside the bubble once per dot of Potency. Once all the Potency has been used, even if some Duration remains, the spell ends."
            }
          ]
        }
      ]
    }
  }
]