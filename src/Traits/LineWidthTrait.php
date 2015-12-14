<?php

namespace Khill\Lavacharts\Traits;

trait LineWidthTrait
{
    /**
     * Data line width in pixels.
     *
     * Use zero to hide all lines and show only the points.
     * You can override values for individual series using the series property.
     *
     * @param  integer $width
     * @throws \Khill\Lavacharts\Exceptions\InvalidConfigValue
     * @return \Khill\Lavacharts\Charts\Chart
     */
    public function lineWidth($width)
    {
<<<<<<< HEAD
        if (is_int($width) === false) {
            throw $this->invalidConfigValue(
                __FUNCTION__,
                'int'
            );
        }

        return $this->addOption([__FUNCTION__ => $width]);
=======
        return $this->setIntOption(__FUNCTION__, $width);
>>>>>>> origin/3.0
    }
}
