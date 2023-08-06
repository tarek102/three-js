import React, { useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import config from '../config'
import state from '../store'
import { download } from '../assets'
import { downloadCanavasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'


const Customizer = () => {
  return (
    <div>Customizer</div>
  )
}

export default Customizer