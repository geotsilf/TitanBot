
import {
    ChannelType,
    PermissionFlagsBits
} from "discord.js";

export const TEMP_VOICE_CONFIG = [
    {
        name: "🔊︱GTA 𝐕",
        triggerChannelId: "1567177445952463030",
        categoryId: "1567174090802860072",
        channelName: "🔊︱GTA 𝐕",
        maxUsers: 10,
        allowedRoles: ["1567165286078218422", "1567165670540578878", "1567165791122497596", "1567166367256551484", "1567167006883586138", "1567167417652613201", "GTA_ROLE_7"]
    },
    {
        name: "🔊︱GTA 𝐕𝐈",
        triggerChannelId: "1567177850229100644",
        categoryId: "1567177656385019974",
        channelName: "🔊︱GTA 𝐕𝐈",
        maxUsers: 10,
        allowedRoles: ["1567165286078218422", "1567165670540578878", "1567165791122497596", "1567166367256551484", "1567167006883586138", "1567167548250783865", "FIVEM_ROLE_7"]
    },
    {
        name: "Minecraft",
        triggerChannelId: "MC_TRIGGER_ID",
        categoryId: "MC_CATEGORY_ID",
        channelName: "Minecraft",
        maxUsers: 10,
        allowedRoles: ["1567165286078218422", "1567165670540578878", "1567165791122497596", "1567166367256551484", "1567167006883586138", "MC_ROLE_6", "MC_ROLE_7"]
    },
    {
        name: "Fortnite",
        triggerChannelId: "FORTNITE_TRIGGER_ID",
        categoryId: "FORTNITE_CATEGORY_ID",
        channelName: "Fortnite",
        maxUsers: 10,
        allowedRoles: ["1567165286078218422", "1567165670540578878", "1567165791122497596", "1567166367256551484", "1567167006883586138", "FORTNITE_ROLE_6", "FORTNITE_ROLE_7"]
    },
    {
        name: "CS2",
        triggerChannelId: "CS2_TRIGGER_ID",
        categoryId: "CS2_CATEGORY_ID",
        channelName: "CS2",
        maxUsers: 10,
        allowedRoles: ["1567165286078218422", "1567165670540578878", "1567165791122497596", "1567166367256551484", "1567167006883586138", "CS2_ROLE_7"]
    },
    {
        name: "Valorant",
        triggerChannelId: "VALORANT_TRIGGER_ID",
        categoryId: "VALORANT_CATEGORY_ID",
        channelName: "Valorant",
        maxUsers: 10,
        allowedRoles: ["1567165286078218422", "1567165670540578878", "1567165791122497596", "1567166367256551484", "1567167006883586138", "VALORANT_ROLE_6", "VALORANT_ROLE_7"]
    },
    {
        name: "Roblox",
        triggerChannelId: "ROBLOX_TRIGGER_ID",
        categoryId: "ROBLOX_CATEGORY_ID",
        channelName: "Roblox",
        maxUsers: 10,
        allowedRoles: ["ROBLOX_ROLE_1", "ROBLOX_ROLE_2", "ROBLOX_ROLE_3", "ROBLOX_ROLE_4", "ROBLOX_ROLE_5", "ROBLOX_ROLE_6", "ROBLOX_ROLE_7"]
    },
    {
        name: "PUBG",
        triggerChannelId: "PUBG_TRIGGER_ID",
        categoryId: "PUBG_CATEGORY_ID",
        channelName: "PUBG",
        maxUsers: 10,
        allowedRoles: ["PUBG_ROLE_1", "PUBG_ROLE_2", "PUBG_ROLE_3", "PUBG_ROLE_4", "PUBG_ROLE_5", "PUBG_ROLE_6", "PUBG_ROLE_7"]
    },
    {
        name: "Rust",
        triggerChannelId: "RUST_TRIGGER_ID",
        categoryId: "RUST_CATEGORY_ID",
        channelName: "Rust",
        maxUsers: 10,
        allowedRoles: ["RUST_ROLE_1", "RUST_ROLE_2", "RUST_ROLE_3", "RUST_ROLE_4", "RUST_ROLE_5", "RUST_ROLE_6", "RUST_ROLE_7"]
    },
    {
        name: "League of Legends",
        triggerChannelId: "LOL_TRIGGER_ID",
        categoryId: "LOL_CATEGORY_ID",
        channelName: "League of Legends",
        maxUsers: 10,
        allowedRoles: ["LOL_ROLE_1", "LOL_ROLE_2", "LOL_ROLE_3", "LOL_ROLE_4", "LOL_ROLE_5", "LOL_ROLE_6", "LOL_ROLE_7"]
    },
    {
        name: "Apex Legends",
        triggerChannelId: "APEX_TRIGGER_ID",
        categoryId: "APEX_CATEGORY_ID",
        channelName: "Apex Legends",
        maxUsers: 10,
        allowedRoles: ["APEX_ROLE_1", "APEX_ROLE_2", "APEX_ROLE_3", "APEX_ROLE_4", "APEX_ROLE_5", "APEX_ROLE_6", "APEX_ROLE_7"]
    },
    {
        name: "Call of Duty",
        triggerChannelId: "COD_TRIGGER_ID",
        categoryId: "COD_CATEGORY_ID",
        channelName: "Call of Duty",
        maxUsers: 10,
        allowedRoles: ["COD_ROLE_1", "COD_ROLE_2", "COD_ROLE_3", "COD_ROLE_4", "COD_ROLE_5", "COD_ROLE_6", "COD_ROLE_7"]
    },
    {
        name: "Rainbow Six Siege",
        triggerChannelId: "R6_TRIGGER_ID",
        categoryId: "R6_CATEGORY_ID",
        channelName: "Rainbow Six Siege",
        maxUsers: 10,
        allowedRoles: ["R6_ROLE_1", "R6_ROLE_2", "R6_ROLE_3", "R6_ROLE_4", "R6_ROLE_5", "R6_ROLE_6", "R6_ROLE_7"]
    },
    {
        name: "Rocket League",
        triggerChannelId: "ROCKET_TRIGGER_ID",
        categoryId: "ROCKET_CATEGORY_ID",
        channelName: "Rocket League",
        maxUsers: 10,
        allowedRoles: ["ROCKET_ROLE_1", "ROCKET_ROLE_2", "ROCKET_ROLE_3", "ROCKET_ROLE_4", "ROCKET_ROLE_5", "ROCKET_ROLE_6", "ROCKET_ROLE_7"]
    },
    {
        name: "Among Us",
        triggerChannelId: "AMONGUS_TRIGGER_ID",
        categoryId: "AMONGUS_CATEGORY_ID",
        channelName: "Among Us",
        maxUsers: 10,
        allowedRoles: ["AMONGUS_ROLE_1", "AMONGUS_ROLE_2", "AMONGUS_ROLE_3", "AMONGUS_ROLE_4", "AMONGUS_ROLE_5", "AMONGUS_ROLE_6", "AMONGUS_ROLE_7"]
    }
];

const temporaryChannels = new Set();

export function registerTemporaryGameVoices(client) {
    client.on("voiceStateUpdate", async (oldState, newState) => {
        try {
            if (
                newState.channelId &&
                newState.channelId !== oldState.channelId
            ) {
                const config = TEMP_VOICE_CONFIG.find(
                    game => game.triggerChannelId === newState.channelId
                );

                if (config) {
                    const member = newState.member;

                    if (!config.allowedRoles.some(role =>
                        member.roles.cache.has(role)
                    )) return;

                    const category = await newState.guild.channels.fetch(
                        config.categoryId
                    );

                    if (!category || category.type !== ChannelType.GuildCategory) {
                        console.error("Invalid category:", config.name);
                        return;
                    }

                    const existing = await newState.guild.channels.fetch();

                    let number = 1;

                    while (existing.some(channel =>
                        channel.parentId === config.categoryId &&
                        channel.name === `${config.channelName} ${number}`
                    )) {
                        number++;
                    }

                    const channel = await newState.guild.channels.create({
                        name: `${config.channelName} ${number}`,
                        type: ChannelType.GuildVoice,
                        parent: config.categoryId,
                        userLimit: config.maxUsers,
                        permissionOverwrites: [
                            {
                                id: newState.guild.roles.everyone.id,
                                deny: [
                                    PermissionFlagsBits.ViewChannel,
                                    PermissionFlagsBits.Connect
                                ]
                            },
                            {
                                id: member.id,
                                allow: [
                                    PermissionFlagsBits.ViewChannel,
                                    PermissionFlagsBits.Connect,
                                    PermissionFlagsBits.ManageChannels
                                ]
                            },
                            ...config.allowedRoles.map(role => ({
                                id: role,
                                allow: [
                                    PermissionFlagsBits.ViewChannel,
                                    PermissionFlagsBits.Connect
                                ]
                            }))
                        ]
                    });

                    temporaryChannels.add(channel.id);
                    await member.voice.setChannel(channel);
                }
            }

            if (oldState.channelId && oldState.channel) {
                const oldChannel = oldState.channel;

                if (
                    temporaryChannels.has(oldChannel.id) &&
                    oldChannel.members.size === 0
                ) {
                    temporaryChannels.delete(oldChannel.id);
                    await oldChannel.delete("Empty temporary game room");
                }
            }
        } catch (error) {
            console.error("[TEMP VOICE]", error);
        }
    });

    console.log("[TEMP VOICE] 15-game temporary voice system loaded.");
}

