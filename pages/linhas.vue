<template>
	<div class="lines">
		<hero img="linhas.jpg" />
		<section class="section">
			<div class="container">
				<h2>Linhas</h2>
				<div class="columns is-multiline">
					<div class="column is-6" v-for="(line, i) in lines" :key="i">
						<bus-line
							:line="line.number"
							:endpoints="line.endpoints"
							:way="line.way"
							:addresses="line.addresses"
							:mapId="line.mapId"
						/>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Hero from '~/components/Hero.vue'
	import BusLine from '~/components/BusLine.vue'
	export default {
		data() {
			return {
				lines: [
					{ number: '444L', endpoints: ['Piabetá', 'Penha'], way: 'going', addresses: { A: 'Av. Santos Dummont, 194-386 Parque São Jorge, Magé', B: 'Estrada José Rucas, 52-150 Penha'}, mapId: '1ifWpRW1RTiqbJ4vTIIIJotxCFRM' },
					{ number: '444L', endpoints: ['Piabetá', 'Penha'], way: 'back', addresses: { A: 'Estrada José Rucas, 52-150 Penha', B: 'Av. Santos Dummont, 194-386 Parque São Jorge, Magé'}, mapId: '1McmhyaIWw5QMAjDOu5gLYMbd7XY' },
					{ number: '404I', endpoints: ['Piabetá', 'Caxias'], way: 'going', addresses: { A: 'Av. Santos Dumont, 534-540 - Parque Veneza, Magé', B: 'Terminal Rodoviário Pref. José Carlos Lacerda - Circular, Duque de Caxias'}, mapId: '1qfYUk2IYyR825Y7Lj13FBFsT7T4' },
					{ number: '404I', endpoints: ['Piabetá', 'Caxias'], way: 'back', addresses: { A: 'Terminal Rodoviário Pref. José Carlos Lacerda - Circular, Duque de Caxias', B: 'Av. Santos Dumont, 534-540 - Parque Veneza, Magé'}, mapId: '1qfYUk2IYyR825Y7Lj13FBFsT7T4' },
					{ number: '406I', endpoints: ['Piabetá', 'Caxias (Bongaba)'], way: 'going', addresses: { A: 'Av. Santos Dumont, 533-539 - Parque Veneza, Magé', B: 'Terminal Rodoviário Pref. José Carlos Lacerda - Circular, Duque de Caxias'}, mapId: '1PHKAECkDLrN9Ul4YnostD-8eUFQ' },
					{ number: '406I', endpoints: ['Piabetá', 'Caxias (Bongaba)'], way: 'back', addresses: { A: 'Terminal Rodoviário Pref. José Carlos Lacerda - Circular, Duque de Caxias', B: 'Av. Santos Dumont, 533-539 - Parque Veneza, Magé'}, mapId: '1BnH78XXgDsq6Wtwhj8XhUi8w7tY' },
					{ number: '23M', endpoints: ['Imbariê', 'Caxias'], way: 'going', addresses: { A: 'Terminal Rodoviário Pref. José Carlos Lacerda - Circular, Duque de Caxias', B: 'Av. Canal, 361-429 - Jardim Imabariê, Duque de Caxias'}, mapId: '1jHUfeTriKhw6UoUiybIlYldDQqQ' },
					{ number: '23M', endpoints: ['Imbariê', 'Caxias'], way: 'back', addresses: { A: 'Av. Canal, 361-429 - Jardim Imabariê, Duque de Caxias', B: 'Terminal Rodoviário Pref. José Carlos Lacerda - Circular, Duque de Caxias'}, mapId: '1jHUfeTriKhw6UoUiybIlYldDQqQ' },
					{ number: '26M', endpoints: ['Morabi', 'Caxias'], way: 'going', addresses: { A: 'R. Vinte e Sete, 33 - Parada Morabi, Duque de Caxias', B: 'Terminal Rodoviário Pref. José Carlos Lacerda - Circular, Duque de Caxias'}, mapId: '19bb7m9vtU5lv7OHpewBBz71ZBKo' },
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
.lines {
	transition: all .3s ease;
	h2 { margin-bottom: 32px; }
}
</style>