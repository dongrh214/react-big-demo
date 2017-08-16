/**
 * Created by dongruihe on 2017/8/11.
 */

import React from 'react';
import { extend } from 'lodash'

import { PropTypes } from 'prop-types';

import './GoodsList.less'

import Loading from '../../../components/Loading/Loading';

// searchKit begin
import { SearchkitManager,SearchkitProvider,
  SearchBox, RefinementListFilter, Pagination,
  HierarchicalMenuFilter, HitsStats, SortingSelector, NoHits,
  ResetFilters, RangeFilter, NumericRefinementListFilter,
  ViewSwitcherHits, ViewSwitcherToggle, DynamicRangeFilter,
  InputFilter, GroupedSelectedFilters,
  Layout, TopBar, LayoutBody, LayoutResults,
  ActionBar, ActionBarRow, SideBar } from 'searchkit'
// searchKit end
const host = "http://demo.searchkit.co/api/movies"
const searchkit = new SearchkitManager(host)


import { List } from 'antd-mobile';


const MovieHitsGridItem = (props)=> {
  const {bemBlocks, result} = props
  let url = "http://www.imdb.com/title/" + result._source.imdbId
  const source:any = extend({}, result._source, result.highlight)
  return (
    <div className={bemBlocks.item().mix(bemBlocks.container("item"))} data-qa="hit">
      <a href={url} target="_blank">
        <img data-qa="poster" alt="presentation" className={bemBlocks.item("poster")} src={result._source.poster} width="130" height="200"/>
        <div data-qa="title" className={bemBlocks.item("title")} dangerouslySetInnerHTML={{__html:source.title}}>
        </div>
      </a>
    </div>
  )
}

const MovieHitsListItem = (props)=> {
  const {bemBlocks, result} = props
  let url = "http://www.imdb.com/title/" + result._source.imdbId
  const source:any = extend({}, result._source, result.highlight)
  return (
    <div className={bemBlocks.item().mix(bemBlocks.container("item"))} data-qa="hit">
      <div className={bemBlocks.item("poster")}>
        <img alt="presentation" data-qa="poster" src={result._source.poster}/>
      </div>
      <div className={bemBlocks.item("details")}>
        <a href={url} target="_blank"><h2 className={bemBlocks.item("title")} dangerouslySetInnerHTML={{__html:source.title}}></h2></a>
        <h3 className={bemBlocks.item("subtitle")}>Released in {source.year}, rated {source.imdbRating}/10</h3>
        <div className={bemBlocks.item("text")} dangerouslySetInnerHTML={{__html:source.plot}}></div>
      </div>
    </div>
  )
}



class Layout1 extends React.Component {

  constructor(props) {
    super(props);
    this.setState = {

    }
  }

  componentDidMount() {

  }



  render() {


    return <div>
      <SearchkitProvider searchkit={searchkit}>
        <Layout>
          <TopBar>
            <SearchBox autofocus={true} searchOnChange={true} prefixQueryFields={["actors^1","type^2","languages","title^10"]}/>
          </TopBar>

          <LayoutBody>

            {/*<SideBar>*/}
              {/*<HierarchicalMenuFilter fields={["type.raw", "genres.raw"]} title="Categories" id="categories"/>*/}
              {/*<DynamicRangeFilter field="metaScore" id="metascore" title="Metascore" rangeFormatter={(count)=> count + "*"}/>*/}
              {/*<RangeFilter min={0} max={10} field="imdbRating" id="imdbRating" title="IMDB Rating" showHistogram={true}/>*/}
              {/*<InputFilter id="writers" searchThrottleTime={500} title="Writers" placeholder="Search writers" searchOnChange={true} queryFields={["writers"]} />*/}
              {/*<RefinementListFilter id="actors" title="Actors" field="actors.raw" size={10}/>*/}
              {/*<RefinementListFilter translations={{"facets.view_more":"View more writers"}} id="writers" title="Writers" field="writers.raw" operator="OR" size={10}/>*/}
              {/*<RefinementListFilter id="countries" title="Countries" field="countries.raw" operator="OR" size={10}/>*/}
              {/*<NumericRefinementListFilter id="runtimeMinutes" title="Length" field="runtimeMinutes" options={[*/}
                {/*{title:"All"},*/}
                {/*{title:"up to 20", from:0, to:20},*/}
                {/*{title:"21 to 60", from:21, to:60},*/}
                {/*{title:"60 or more", from:61, to:1000}*/}
              {/*]}/>*/}
            {/*</SideBar>*/}
            <LayoutResults>
              <ActionBar>

                <ActionBarRow>
                  <HitsStats translations={{
                    "hitstats.results_found":"{hitCount} results found"
                  }}/>
                  {/*<ViewSwitcherToggle/>*/}
                  <SortingSelector options={[
                    {label:"Relevance", field:"_score", order:"desc"},
                    {label:"Latest Releases", field:"released", order:"desc"},
                    {label:"Earliest Releases", field:"released", order:"asc"}
                  ]}/>
                </ActionBarRow>

                <ActionBarRow>
                  <GroupedSelectedFilters/>
                  <ResetFilters/>
                </ActionBarRow>

              </ActionBar>
              <ViewSwitcherHits
                hitsPerPage={12} highlightFields={["title","plot"]}
                sourceFilter={["plot", "title", "poster", "imdbId", "imdbRating", "year"]}
                hitComponents={[
                  {key:"grid", title:"Grid", itemComponent:MovieHitsGridItem, defaultOption:true},
                  {/*{key:"list", title:"List", itemComponent:MovieHitsListItem}*/}
                ]}
                scrollTo="body"
              />
              <NoHits suggestionsField={"title"}/>
              <Pagination showNumbers={true}/>
            </LayoutResults>

          </LayoutBody>
        </Layout>
      </SearchkitProvider>
    </div>
  }
}
Layout1.propTypes = {
};
Layout1.defaultProps = {
};



export default Layout1;

