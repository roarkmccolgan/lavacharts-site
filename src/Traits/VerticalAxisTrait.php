<?php

namespace Khill\Lavacharts\Traits;

use \Khill\Lavacharts\Configs\VerticalAxis;

trait VerticalAxisTrait
{
    /**
     * An object with members to configure various vertical axis elements.
     *
     * To specify properties of this property, create a new VerticalAxis object,
     * set the values then pass it to this function or to the constructor.
     *
<<<<<<< HEAD
     * @param  \Khill\Lavacharts\Configs\VerticalAxis $vAxis
     * @return \Khill\Lavacharts\Charts\Chart
     */
    public function vAxis(VerticalAxis $vAxis)
    {
        return $this->addOption($vAxis->toArray(__FUNCTION__));
=======
     * @param  array $verticalAxisConfig
     * @return \Khill\Lavacharts\Charts\Chart
     */
    public function vAxis($verticalAxisConfig)
    {
        return $this->setOption(__FUNCTION__, new VerticalAxis($verticalAxisConfig));
>>>>>>> origin/3.0
    }
}
