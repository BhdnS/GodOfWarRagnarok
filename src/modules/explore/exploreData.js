import { Explore } from './Explore'

const exploreData = new Explore({
	exploreOne: document.querySelector('#exploreOne'),
	exploreListOne: document.querySelector('#exploreListOne'),
	exploreTwo: document.querySelector('#exploreTwo'),
	exploreListTwo: document.querySelector('#exploreListTwo'),
  minimum: document.querySelector('#minimum'),
  recommended: document.querySelector('#recommended'),
  standard: document.querySelector('#standard'),
  limited: document.querySelector('#limited'),
  explorePrice: document.querySelector('#explorePrice'),
  changePrice: document.querySelector('#changePrice')
})

exploreData.clickOne();
exploreData.clickTwo();