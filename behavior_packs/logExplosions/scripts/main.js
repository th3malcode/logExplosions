// https://jaylydev.github.io/scriptapi-docs/latest/classes/_minecraft_server.WorldAfterEvents.html#explosion
//import { world, system, Player, Entity } from '@minecraft/server';
import { world } from '@minecraft/server';
import { typeIds } from './typeIds.js';

function logEvent(eve, typ,  nam, dim, loc) {
	const { x, y, z } = loc;
	const cor = `${Math.floor(x)}, ${Math.floor(y)}, ${Math.floor(z)}`;
	console.log(`${eve}, ${typ}, ${nam}, ${dim}, ${cor}`);
}


// Function to calculate the distance between two locations
function calculateDistance(loc1, loc2) {
    const dx = loc1.x - loc2.x;
    const dy = loc1.y - loc2.y;
    const dz = loc1.z - loc2.z;
    return Math.floor(Math.sqrt(dx * dx + dy * dy + dz * dz));
}

world.afterEvents.explosion.subscribe((event) => {
	const players = world.getPlayers();
	const impactedBlocks = event.getImpactedBlocks();
	let src;
	if (event.source) {
		src = `${event.source.typeId}`;
	} else {
		src = `Unknown`;
	}
	logEvent(`explosion`, src, `none`, event.dimension.id, impactedBlocks[0]);
	players.forEach(player => {
		const distance = calculateDistance(player.location, impactedBlocks[0]);
		logEvent(`explosion`, distance, player.name, player.dimension.id, player.location);
	});
});

world.beforeEvents.playerLeave.subscribe(({ player }) => {
	logEvent(`playerLeave`, `none`, player.name, player.dimension.id, player.location)
});

// Subscribe to the `itemUse` event, which is triggered when a player uses an item
world.afterEvents.itemUse.subscribe(({ source, itemStack }) => {
	if (typeIds.includes(itemStack.typeId)) {
		logEvent(`itemUse`, itemStack.typeId, source.name, source.dimension.id, source.location)
	}
//logEvent(`itemUse`, itemStack.typeId, source.name, source.dimension.id, source.location)
});

world.afterEvents.playerInteractWithBlock.subscribe(({ player, block }) => {
	if (typeIds.includes(block.typeId)) {
		logEvent(`playerInteractWithBlock`, block.typeId, player.name, player.dimension.id, block.location)
	}	
//		logEvent(`playerInteractWithBlock`, block.typeId, player.name, player.dimension.id, block.location)
});

world.afterEvents.playerPlaceBlock.subscribe(({ player, block }) => {
	if (typeIds.includes(block.typeId)) {
		logEvent(`playerPlaceBlock`, block.typeId, player.name, player.dimension.id, block.location)
	}	
//		logEvent(`playerPlaceBlock`, block.typeId, player.name, player.dimension.id, block.location)
});

world.afterEvents.playerInteractWithEntity.subscribe(({ player, target }) => {
	if (typeIds.includes(target.typeId)) {
		logEvent(`playerInteractWithEntity`, target.typeId, player.name, player.dimension.id, target.location)
	}	
//		logEvent(`playerInteractWithEntity`, target.typeId, player.name, player.dimension.id, target.location)
});

