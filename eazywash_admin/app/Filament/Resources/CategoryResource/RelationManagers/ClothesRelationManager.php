<?php

namespace App\Filament\Resources\CategoryResource\RelationManagers;

use App\Filament\Resources\ClothResource;
use Filament\Resources\Forms\Components;
use Filament\Resources\Forms\Form;
use Filament\Resources\RelationManager;
use Filament\Resources\Tables\Columns;
use Filament\Resources\Tables\Filter;
use Filament\Resources\Tables\Table;

class ClothesRelationManager extends RelationManager
{
    public static $primaryColumn = 'name';

    public static $relationship = 'clothes';

    public static function form(Form $form)
    {
        return ClothResource::form($form);
    }

    public static function table(Table $table)
    {
        return ClothResource::table($table);
    }
}
