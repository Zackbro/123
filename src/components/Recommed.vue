<template>
	<div class="sub-media">
		<h2 class="category"><span class="title">推荐列表</span></h2>
		<ul>
			<li v-for="item in list">
				<a :href="'/list/' + item.id">
					<img class="poster" :alt=item.name :src="'https://image.tmdb.org/t/p/w184_and_h276_bestv2/' + item.poster_path">
				</a>
				<h3><a :href="'/list/' + item.id">{{item.name}}</a></h3>
				<p>{{item.description}}</p>
			</li>
		</ul>
	</div>

</template>

<script>
	import API from '../utils/api'
	export default {
		data () {
			return {
				list: [],
				recList1: {},
				recList2: {},
				recList3: {}				
			}
		},
		mounted () {
			this.$http.get(API.recList1).then(function (res) {
				this.recList1 = res.data;
				console.log(res.data);
				this.list.push(this.recList1);
			});
			this.$http.get(API.recList2).then(function (res) {
				this.recList2 = res.data;
				this.list.push(this.recList2);
			});
			this.$http.get(API.recList3).then(function (res) {
				this.recList3 = res.data;
				this.list.push(this.recList3);
			});
		},
		methods: {
		}
	}
</script>