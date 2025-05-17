// https://jaylydev.github.io/scriptapi-docs/latest/classes/_minecraft_server.WorldAfterEvents.html#explosion
//import { world, system, Player, Entity } from '@minecraft/server';
import { world } from '@minecraft/server';
import { typeIds } from './typeIds.js';

function logEvent(eve, nam, dim, loc) {
}


// Function to log player locations
function logPlayerLocations() {
	const players = world.getPlayers();
	players.forEach(player => {
		const { x, y, z } = player.location;
		const coordinates = `${Math.floor(x)}, ${Math.floor(y)}, ${Math.floor(z)}`;
		console.log(`${player.name} ${player.dimension.id} at ${coordinates}`);
	});
}

world.afterEvents.explosion.subscribe((event) => {
	const impactedBlocks = event.getImpactedBlocks();
	const { x, y, z } = impactedBlocks[0];
	const coordinates = `${Math.floor(x)}, ${Math.floor(y)}, ${Math.floor(z)}`;
	let src;
	if (event.source) {
		src = `${event.source.typeId}`;
	} else {
		src = `Unknown`;
	}
	//console.log(`Explosion Dim: ${event.dimension.id} ${src} Impacted blocks: ${JSON.stringify(impactedBlocks)}`);
	console.log(`Explosion ${event.dimension.id} ${src} at ${coordinates}`);
	logPlayerLocations();
});

world.beforeEvents.playerLeave.subscribe(({ player }) => {
	const { x, y, z } = player.location;
	const coordinates = `${Math.floor(x)}, ${Math.floor(y)}, ${Math.floor(z)}`;
	console.log(`Leave ${player.name} ${player.dimension.id} at ${coordinates}`);
});



// Subscribe to the `itemUse` event, which is triggered when a player uses an item
world.afterEvents.itemUse.subscribe(({ source, itemStack }) => {
	if (typeIds.includes(itemStack.typeId)) {
		const { x, y, z } = source.location;
		const coordinates = `${Math.floor(x)}, ${Math.floor(y)}, ${Math.floor(z)}`;
		console.log(`item ${source.name} ${source.dimension.id} ${itemStack.typeId} at ${coordinates}`);
	}
	logEvent(0,0,0,0);
});

world.afterEvents.playerInteractWithBlock.subscribe(({ player, block }) => {
	if (typeIds.includes(block.typeId)) {
		const { x, y, z } = block.location;
		const coordinates = `${Math.floor(x)}, ${Math.floor(y)}, ${Math.floor(z)}`;
		console.log(`block ${player.name} ${player.dimension.id} ${block.typeId} at ${coordinates}`);
	}	
});


world.afterEvents.playerInteractWithEntity.subscribe(({ player, target }) => {
	if (typeIds.includes(target.typeId)) {
		const { x, y, z } = target.location;
		const coordinates = `${Math.floor(x)}, ${Math.floor(y)}, ${Math.floor(z)}`;
		console.log(`entity ${player.name} ${player.dimension.id} ${target.typeId} at ${coordinates}`);
	}	
});

