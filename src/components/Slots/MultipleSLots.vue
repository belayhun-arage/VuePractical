<template>
    <div>
        <header>
            <h1>
                <slot name="header" class="text-blue-300">Header from child</slot>
            </h1>
        </header>
        <slot class="text-blue-300">Default content from child</slot>
    </div>
</template>