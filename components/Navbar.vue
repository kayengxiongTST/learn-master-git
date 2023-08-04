<template>
    <v-app-bar
        image="https://cdn.csldome.com/csld/assets/component_contents/desktop_background/09cd7fa9-6f17-414c-a9bf-aab71fdf3765.jpeg"
    >
        <div
            class="d-flex align-center"
            style="width: 100%; max-width: 1200px; margin: auto"
        >
            <v-img
                src="https://cdn.csldome.com/csld/assets/component_contents/header_logo/7b27b273-2c19-434b-b5fa-3146265bc1d1.png"
                max-width="60"
                contain
            ></v-img>
            <v-btn class="ml-5">
                <v-icon :icon="mdiGift" size="small" start></v-icon>
                Promotions
            </v-btn>
            <v-btn class="ml-5">
                <v-icon :icon="mdiNaturePeople" start></v-icon>
                Invite and Earn
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn>
                <v-icon :icon="mdiAccountCircleOutline" start></v-icon>
                Sign In
            </v-btn>
            <v-btn>
                <v-icon :icon="mdiAccountPlus" start></v-icon>
                Sign Up
            </v-btn>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn color="primary" v-bind="props"> Lang </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title> Eng </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title> Thai </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title> Lao </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </v-app-bar>
</template>
<script setup lang="ts">
import {
    mdiGift,
    mdiNaturePeople,
    mdiAccountCircleOutline,
    mdiAccountPlus,
} from "@mdi/js";
</script>