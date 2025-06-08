// https://jaylydev.github.io/scriptapi-docs/latest/classes/_minecraft_server.WorldAfterEvents.html#explosion
//import { world, system, Player, Entity } from '@minecraft/server';
import { world, system } from '@minecraft/server';
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
	if (impactedBlocks.length > 0 ) {
		logEvent(`explosion`, src, `none`, event.dimension.id, impactedBlocks[0]);
		players.forEach(player => {
			const distance = calculateDistance(player.location, impactedBlocks[0]);
			logEvent(`explosion`, `dist ${distance}`, player.name, player.dimension.id, player.location);
		});
	} else {
		console.log(`explosion, src, none, event.dimension.id, 'Unknown'`);
		players.forEach(player => {
			logEvent(`explosion`, src, player.name, player.dimension.id, player.location);
		});
	};
});


const damageSrcIds = [
	"entityExplosion",
	"blockExplosion"
];


world.afterEvents.entityHurt.subscribe(({ damageSource, hurtEntity }) => {
	if (damageSrcIds.includes(damageSource.cause)) {
		//console.log(`Explosion damage detected at: ${JSON.stringify(damageSource.cause)}`);
		//console.log(`Explosion damage detected at: ${JSON.stringify(hurtEntity.location)}`);
		logEvent(`entityHurt`, damageSource.cause, `hurt-${hurtEntity.typeId}`, hurtEntity.dimension.id, hurtEntity.location);
		const loc = hurtEntity.location;
		const players = world.getPlayers();
		players.forEach(player => {
			const distance = calculateDistance(player.location, loc);
			logEvent(`entityHurt`, `dist ${distance}`, player.name, player.dimension.id, player.location);
		});
	};
});

const entityIds = [
	"minecraft:player",
	"minecraft:cat",
	"minecraft:dog"
];


world.afterEvents.entityDie.subscribe((event) => {
	//Player
	//Cat or Dog

	if (entityIds.includes(event.deadEntity.typeId)) {
		const cause = event.damageSource?.cause ?? "unknown";
		let namish;
		if ( event.deadEntity.name = "undefined" ) {
			namish = event.deadEntity.typeId;
		} else { 
			namish = event.deadEntity.name;
		};
		const loc = event.deadEntity.location;
		logEvent(`entityDie`, cause, namish, event.deadEntity.dimension.id, loc);
		if ( event.damageSource.damagingEntity ) {
			logEvent(`entityDie`, "Killer", event.damageSource.damagingEntity.name, event.damageSource.damagingEntity.dimension.id, event.damageSource.damagingEntity.location);
		} else {
			const players = world.getPlayers();
			players.forEach(player => {
				const distance = calculateDistance(player.location, loc);
				logEvent(`entityDie`, `dist ${distance}`, player.name, player.dimension.id, player.location);
			});

		}
	}
});



/*system.runInterval(() => {
for (const player of world.getAllPlayers()) {
	    player.onScreenDisplay.setTitle("Hello World");
	    player.onScreenDisplay.updateSubtitle("Welcome to the server!");
}
}, 100);
*/
/*
system.runInterval(() => {
	for (const player of world.getAllPlayers()) {
		const { x, y, z } = player.location;
		const cor = `${Math.floor(x/16).toString(16).toUpperCase()}, ${Math.floor(y)}, ${Math.floor(z/16).toString(16).toUpperCase()}`;
		player.onScreenDisplay.setActionBar(cor);
	}
}, 20);
*/

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

