import React, { useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { snapshot, useSnapshot } from 'valtio'
import config from '../config/config'
import state from '../store'
import { download } from '../assets'
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { AIPicker, ColorPicker, FilePicker, Tab, CustomButton } from '../components'

const Customizer = () => {

  const snap = snapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          Customizer
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer