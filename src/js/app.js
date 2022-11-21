import * as bootstrap from "bootstrap";
import Vue from "vue";

Vue.component("carousel", {
	props: ["id"],
	data: function () {
		return {
			count: 0,
			img1: require("../images/image-product-1.jpg"),
			img2: require("../images/image-product-2.jpg"),
			img3: require("../images/image-product-3.jpg"),
			img4: require("../images/image-product-4.jpg"),
			thumb1: require("../images/image-product-1-thumbnail.jpg"),
			thumb2: require("../images/image-product-2-thumbnail.jpg"),
			thumb3: require("../images/image-product-3-thumbnail.jpg"),
			thumb4: require("../images/image-product-4-thumbnail.jpg"),
		};
	},
	methods: {
		getMainImg(path) {
			return require(`../images/image-product-${path}.jpg`);
		},
		getThumbNail(path) {
			return require(`../images/image-product-${path}-thumbnail.jpg`);
		},
	},

	template: '#carousel-template',
});

var app = new Vue({
	el: "#app",
	data: {
		mounted: false,
		lightBoxOpen: false,
		cartItems: 0,
		itemQuantity: 0,
		discount: 50,
		itemPrice: 125.0,
		itemName: "Fall Limited Edition Sneakers",
		itemDescription: "These low-profile sneakers are your perfect casual wear companion. Featuring adurable rubber outer sole, they'll withstand everything the weather can offer.",
	},
	computed: {
		truncateTitle() {
			if (window.innerWidth < 700) {
				return `${this.itemName.substring(
					0,
					30
				)}...`;
			}
			return this.itemName;
		},
	},
	mounted() {
		this.mounted = true;
	},
	methods: {
		addItem() {
			this.itemQuantity++;
		},
		removeItem() {
			if (this.itemQuantity > 0) {
				this.itemQuantity--;
			}
		},
		addToCart() {
			if (this.itemQuantity == 0) {
				return;
			}
			this.cartItems = this.cartItems + this.itemQuantity;
			this.itemQuantity = 0;
		},
		emptyCart() {
			this.cartItems = 0;
			const emptyCartModal =
				document.querySelector("#cartModal");
			const modal =
				bootstrap.Modal.getInstance(
					emptyCartModal
				);
			modal.hide();
		},
		openLightBox() {
			// console.log("B00B5")
			let that = this;
			that.lightBoxOpen = true;
			var myModal = new bootstrap.Modal(
				document.getElementById("lightBoxModal")
			);
			myModal.show();
			const myModalEl =
				document.getElementById(
					"lightBoxModal"
				);
			myModalEl.addEventListener(
				"hidden.bs.modal",
				(event) => {
					that.lightBoxOpen = false;
				}
			);
		},
	},
});
