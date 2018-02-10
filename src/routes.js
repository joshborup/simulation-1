import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Shelves from './components/shelves/Shelves'
import Shelf from './components/shelves/Shelf';
import AddBin from './components/shelves/AddBin';
import ReadBin from './components/shelves/ReadBin'

export default (
    <Switch>
        <Route path='/bins/A1' component={ReadBin}/>
        <Route path='/bins/A2' component={ReadBin}/>
        <Route path='/bins/A3' component={ReadBin}/>
        <Route path='/bins/A4' component={ReadBin}/>
        <Route path='/bins/A5' component={ReadBin}/>
        <Route path='/shelf/A/add/A1' component={AddBin}/>
        <Route path='/shelf/A/add/A2' component={AddBin}/>
        <Route path='/shelf/A/add/A3' component={AddBin}/>
        <Route path='/shelf/A/add/A4' component={AddBin}/>
        <Route path='/shelf/A/add/A5' component={AddBin}/>
        <Route path='/bins/B1' component={ReadBin}/>
        <Route path='/bins/B2' component={ReadBin}/>
        <Route path='/bins/B3' component={ReadBin}/>
        <Route path='/bins/B4' component={ReadBin}/>
        <Route path='/bins/B5' component={ReadBin}/>
        <Route path='/shelf/B/add/B1' component={AddBin}/>
        <Route path='/shelf/B/add/B2' component={AddBin}/>
        <Route path='/shelf/B/add/B3' component={AddBin}/>
        <Route path='/shelf/B/add/B4' component={AddBin}/>
        <Route path='/shelf/B/add/B5' component={AddBin}/>
        <Route path='/A' component={Shelf}/>
        <Route path='/B' component={Shelf}/>
        <Route path='/C' component={Shelf}/>
        <Route path='/D' component={Shelf}/>
        <Route exact path='/' component={Shelves}/>
    </Switch>
)